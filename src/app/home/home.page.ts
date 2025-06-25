import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { Cat, DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public data = inject(DataService);
  public cats : any;
  constructor() {
        this.data.loadCats();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }


  getCats(){
    return this.data.loadCats()
  }

  onSearch(query:string){
    this.data.searchBreeds(query).subscribe(resp=>{
      console.log("busqueda", resp, "query: ", query)
      this.cats = resp;
    })
  }
}
