import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface Cat {
  breeds: any,
  height:number,
  id:string,
  url:string,
  width:number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);
  cats: any;
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public loadCats(){
   this.http.get(`https://api.thecatapi.com/v1/images/search`,
      {
        params:{
          api_key:'DEMO-API-KEY',
          limit:10,
          has_breeds: true
        }
      }
    ).subscribe((resp)=>{
      this.cats = resp
      console.log(resp)
    })
  }

  public searchBreeds(query: string){
   return this.http.get(`https://api.thecatapi.com/v1/breeds/search`,
      {
        params:{
          api_key:'DEMO-API-KEY',
          attach_image:1,
          q: query
        }
      }
    ).pipe(
      tap(
        cats=>{
          console.log("console desde el tap", cats)
          this.cats = cats;
        }
      )
    )
  }

  public getCatById(id: string) {
    for (let i = 0; i < this.cats.length; i++) {
      const cat = this.cats[i];
      if(cat.id === id){
        console.log(cat)
        return cat
      }
    }
  }

}
