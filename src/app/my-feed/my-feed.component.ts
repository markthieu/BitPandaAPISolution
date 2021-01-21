import { Component, OnInit } from '@angular/core';
import { MyFeedService } from '../my-feed.service';

@Component({
  selector: 'app-my-feed',
  templateUrl: './my-feed.component.html',
  styleUrls: ['./my-feed.component.css']
})
export class MyFeedComponent implements OnInit {
  items = this.myFeedService.getItems();

  constructor(private myFeedService: MyFeedService) { }

  ngOnInit(): void {
  }

}
