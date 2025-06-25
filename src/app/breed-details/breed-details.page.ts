
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catBreed, DataService} from '../services/data.service';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.page.html',
  styleUrls: ['./breed-details.page.scss'],
  standalone: false,
})
export class BreedDetailsPage implements OnInit {
  public cat!: catBreed;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.cat = this.data.getCatById(id);
  }
}
