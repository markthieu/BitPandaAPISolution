import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptosComponent } from './cryptos/cryptos.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { IndexesComponent } from './indexes/indexes.component';
import { FiatsComponent } from './fiats/fiats.component';
import { MyFeedComponent} from './my-feed/my-feed.component';

const routes: Routes = [
  { path: 'cryptos', component: CryptosComponent },
  { path: 'commodities', component: CommoditiesComponent },
  { path: 'fiats', component: FiatsComponent },
  { path: 'indexes', component: IndexesComponent },
  { path: 'myFeed', component: MyFeedComponent },
  { path: '', redirectTo: '/myFeed',pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
