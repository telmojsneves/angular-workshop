import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  info = new FooterInfo("Telmo Neves", "telmojsneves");

  constructor() {



  }

  ngOnInit() {
  }

}

export class FooterInfo {
  constructor(
    public name: string,
    public github: string) { }
}
