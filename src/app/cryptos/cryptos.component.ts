import { Component, OnInit } from '@angular/core';
import {BitpandaService} from '../bitpanda.service';
import {MyFeedService} from '../my-feed.service';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class CryptosComponent implements OnInit {

  Data: any;
  cryptocurrencies: any;

  constructor(private bitPandaService: BitpandaService,private feedService: MyFeedService) {
    this.Data = [];
    this.cryptocurrencies = [];
   }

  ngOnInit(): void {
    this.getCryptos();

  }

  addToFeed(currency){
    this.feedService.addToFeed(currency);
  }


  getCryptos(){
    this.bitPandaService.getData().subscribe(data => {
      this.Data = data.data.attributes;
      this.cryptocurrencies = this.Data.cryptocoins;
    })
  }

}
