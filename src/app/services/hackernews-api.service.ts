import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';
//used for catching a error in http request (not used for this demo)
//import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';



// api from https://github.com/HackerNews/API

@Injectable()
export class HackerNewsApiService {

  private hckrnewsUrl = 'https://hacker-news.firebaseio.com/v0';  // URL to web API


  constructor(private http: Http) { }


  getNewsList() : Observable<any> {

    return this.http.get(this.hckrnewsUrl + '/beststories.json')
      .map(this.extractData);


  }

  getItem(item_id : number) : Observable<any> {

    return this.http.get(this.hckrnewsUrl + '/item/' + item_id + '.json')
      .map(this.extractData);
  }


  private extractData(res: Response) {

    return res.json();

  }


}
