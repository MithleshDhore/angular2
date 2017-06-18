import { Injectable } from '@angular/core';
import {Http, HttpModule, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  constructor(private http: Http){ }

  get(url: string, queryParams?: Object): Observable<any> {
        let paramUrl;
        if (queryParams) {
            paramUrl = url + this.getQueryString(queryParams)
        } else {
            paramUrl = url;
        }
        return this.http.get(paramUrl)
        .map((res: any) => res.json())
        .catch((error:any) => Observable.throw('Server error!!'));
      }

  private getQueryString(queryParams: Object): string {
            var queryString = "?";
            for (var prop in queryParams) {
                if (queryParams.hasOwnProperty(prop)) {
                    queryString += `${prop}=${queryParams[prop]}&`
                }
            }
            queryString = queryString.substring(0, queryString.length - 1);
            return queryString
        }

  post(url: string, body: Object): Observable<any> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
             .map(res => {
               console.log("Response : " ,res);
                  return JSON.stringify(res);
                })
            .catch((error: any) => Observable.throw('Server error'));
    }
}
