import { Component, OnInit } from '@angular/core';

import {Input} from '@angular/core';

import {HackerNewsApiService} from '../services/hackernews-api.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemID: number;
  item;

  private sub: any;

  constructor(
      private _hckrnewsAPIService: HackerNewsApiService,
      private route: ActivatedRoute) { }


  ngOnInit() {

    if (this.itemID === undefined) {

      this.sub = this.route.params.subscribe(params => {

         this.itemID = +params['id'];

      });
    }


    this._hckrnewsAPIService.getItem(this.itemID)
    .subscribe(
      item => {this.item = item},
    );

  }

  checkItem(el) : void{
    console.log(el);
  }

}
