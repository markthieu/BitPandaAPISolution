import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFeedService {
  items = [];
  constructor() { }

  addToFeed(currency){
    if(this.items.includes(currency)){
      window.alert("Item already added")
    }else{
    this.items.push(currency);
    window.alert("Item added to feed")
    }
  }
  getItems(){
    return this.items;
  }
  clearItems(){
    this.items = [];
    return this.items;
  }
  isAdded(currency){
    if(this.items.includes(currency)){
      return true;
    }else{
      return false;
    }
  }
}
