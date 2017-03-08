import { Component, OnInit } from '@angular/core';


/*import hackernewsService here*/
import {HackerNewsApiService} from '../services/hackernews-api.service';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  items;

  constructor( /*add service here*/) {

  }

  ngOnInit() {
    /* get news here from service*/
    





  }

}
