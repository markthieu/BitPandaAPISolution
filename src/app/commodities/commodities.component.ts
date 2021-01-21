import { Component, OnInit } from '@angular/core';
import { BitpandaService } from '../bitpanda.service';
import {MyFeedService} from '../my-feed.service';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit {

  Data: any;
  commodities: any;

  constructor(private bitPandaService: BitpandaService,private feedService: MyFeedService ) {
    this.Data = [];
    this.commodities = [];
   }

  ngOnInit(): void {
    this.getCommodities();
  }
  addToFeed(currency){
    this.feedService.addToFeed(currency);
  }

  getCommodities(){
    this.bitPandaService.getData().subscribe(data => {
      this.Data = data.data.attributes;
      this.commodities = this.Data.commodities;
    })
  }

}
