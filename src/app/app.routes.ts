import { Routes, RouterModule } from '@angular/router';

import {StoriesComponent} from './stories/stories.component';

import {DatabindingComponent} from './databinding/databinding.component';

import {ItemComponent} from './item/item.component';

const routes: Routes = [
 { path: '', redirectTo: 'news', pathMatch: 'full' },
  {path: 'news', component: StoriesComponent},
  {path: 'news/:id', component: ItemComponent},

  {path: 'demo', component: DatabindingComponent},




];

export const routing = RouterModule.forRoot(routes);
