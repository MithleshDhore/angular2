var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, {native_parser: true});
db.bind('users');

var service = {};

service.authenticate = authenticate;
service.getById = getById;
service.create = create;

module.exports = service;

function authenticate(username, password) {
  var deferred = Q.defer();

  db.users.findOne({
    username: username
  }, function(err, user) {
    if (err)
      deferred.reject(err.name + ': ' + err.message);

    if (user && bcrypt.compareSync(password, user.hash)) {
      deferred.resolve({
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: jwt.sign({
          sub: user._id
        }, config.secret)
      });
    } else {
      deferred.resolve();
    }
  });

  return deferred.promise;
}

function getById(_id) {
  var deferred = Q.defer();

  db.users.findById(_id, function(err, user) {
    if (err)
      deferred.reject(err.name + ': ' + err.message);
    if (user) {
      deferred.resolve(_.omit(user, 'hash'));
    } else {
      deferred.resolve();
    }
  });
  return deferred.promise;
}

function create(userParam) {
  var deferred = Q.defer();

  db.users.findOne({
    username: userParam.username
  }, function(err, user) {
    if (err)
      deferred.reject(err.name + ': ' + err.message);
    if (user) {
      deferred.reject('Username "' + userParam.username + '" is already taken');
    } else {
      createUser();
    }
  });

  function createUser() {
    var user = _.omit(userParam, 'password');
    user.hash = bcrypt.hashSync(userParam.password, 10);
    db.users.insert(user, function(err, doc) {
      if (err)
        deferred.reject(err.name + ': ' + err.message);
      deferred.resolve();
    });
  }
  return deferred.promise;
}
