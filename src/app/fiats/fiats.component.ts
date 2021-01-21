import { Component, OnInit } from '@angular/core';
import { BitpandaService } from '../bitpanda.service'

@Component({
  selector: 'app-fiats',
  templateUrl: './fiats.component.html',
  styleUrls: ['./fiats.component.css']
})
export class FiatsComponent implements OnInit {
  Data: any;
  fiats: any;

  constructor(private bitPandaService: BitpandaService) {
    this.Data = [];
    this. fiats = [];
   }

  ngOnInit(): void {
    this.getFiats();
  }

  getFiats(){
    this.bitPandaService.getData().subscribe(data => {
      this.Data = data.data.attributes;
      this.fiats = this.Data.fiats;
    })
  }

}
