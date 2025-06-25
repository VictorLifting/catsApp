import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { BreedDetailsPageRoutingModule } from './breed-details-routing.module';
import { BreedDetailsPage } from './breed-details.page';

describe('BreedDetailsPage', () => {
  let component: BreedDetailsPage;
  let fixture: ComponentFixture<BreedDetailsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BreedDetailsPage],
      imports: [IonicModule.forRoot(), BreedDetailsPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
