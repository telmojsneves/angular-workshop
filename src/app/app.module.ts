import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoriesComponent } from './stories/stories.component';
import { ItemComponent } from './item/item.component';

import { HackerNewsApiService } from './services/hackernews-api.service';
import { UnixTimePipe } from './pipes/unix-time.pipe'

import { routing } from './app.routes';


import { DatabindingComponent } from "./databinding/databinding.component";
import { EventBindingComponent } from "./databinding/event-binding.component";
import { PropertyBindingComponent } from "./databinding/property-binding.component";
import { TwoWayBindingComponent } from "./databinding/two-way-binding.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoriesComponent,
    ItemComponent,
    UnixTimePipe,
    DatabindingComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [HackerNewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
