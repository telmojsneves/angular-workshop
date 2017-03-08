import { Component, OnInit } from '@angular/core';


/*import hackernewsService*/
import {HackerNewsApiService} from '../services/hackernews-api.service';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  items;

  constructor( private _hckrnewsAPIService: HackerNewsApiService) {

  }

  ngOnInit() {
    this._hckrnewsAPIService.getNewsList()
    .subscribe(
      items => this.items = items,
      error => console.log("No stories catched"),
    )





  }

}
