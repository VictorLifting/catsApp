import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { catBreed, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public data = inject(DataService);
  public cats: catBreed[] = [];

  constructor() {
    this.cats = this.data.cats;
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  onSearch(query:string){
    this.data.searchBreeds(query).subscribe(resp=>{
      this.cats = resp;
    })
  }
}
