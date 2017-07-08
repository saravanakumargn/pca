import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import * as path from './constants/paths';

@Injectable()
export class AppService {
 
  constructor(private http: Http) { }
 
callPost (url: string, params:any): Promise<any> {
  return this.http.post(url, params)
             .toPromise()
             .then(this.extractData)
             .catch(this.handleError);
}

  getWebpage(): Promise<any> {
      return this.http.get(path.loginPage)
          .toPromise()
          .then(this.extractData)
          .catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res.text();
    //   console.log(body)
      return body || {};
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
}