import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptosComponent } from './cryptos/cryptos.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { FiatsComponent } from './fiats/fiats.component';
import { IndexesComponent } from './indexes/indexes.component';
import { MyFeedComponent } from './my-feed/my-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptosComponent,
    CommoditiesComponent,
    FiatsComponent,
    IndexesComponent,
    MyFeedComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
