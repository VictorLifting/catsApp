import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface catBreed {
  weight:             Weight;
  id:                 string;
  name:               string;
  cfa_url:            string;
  vetstreet_url:      string;
  vcahospitals_url:   string;
  temperament:        string;
  origin:             string;
  country_codes:      string;
  country_code:       string;
  description:        string;
  life_span:          string;
  indoor:             number;
  lap:                number;
  alt_names:          string;
  adaptability:       number;
  affection_level:    number;
  child_friendly:     number;
  dog_friendly:       number;
  energy_level:       number;
  grooming:           number;
  health_issues:      number;
  intelligence:       number;
  shedding_level:     number;
  social_needs:       number;
  stranger_friendly:  number;
  vocalisation:       number;
  experimental:       number;
  hairless:           number;
  natural:            number;
  rare:               number;
  rex:                number;
  suppressed_tail:    number;
  short_legs:         number;
  wikipedia_url:      string;
  hypoallergenic:     number;
  reference_image_id: string;
  image:              Image;
}

export interface Image {
  id:     string;
  width:  number;
  height: number;
  url:    string;
}

export interface Weight {
  imperial: string;
  metric:   string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);
  public cats : catBreed [] = [];

  constructor() { }

  public searchBreeds(query: string){
   return this.http.get<catBreed[]>(`https://api.thecatapi.com/v1/breeds/search`,
      {
        params: {
          api_key:'DEMO-API-KEY',
          attach_image:1,
          q: query
        }
      }
    ).pipe(
      tap(
        cats => {
          this.cats = cats;
        }))
  }

  public getCatById (id: string) {
    for (let i = 0; i < this.cats.length; i++) {
      const cat = this.cats[i];
      if (cat.id === id) {
        return cat
      }
    }
     return this.cats[0];
  }

}
