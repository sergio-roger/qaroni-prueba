import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliComponent } from './peli.component';

describe('PeliComponent', () => {
  let component: PeliComponent;
  let fixture: ComponentFixture<PeliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliComponent]
    });
    fixture = TestBed.createComponent(PeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
