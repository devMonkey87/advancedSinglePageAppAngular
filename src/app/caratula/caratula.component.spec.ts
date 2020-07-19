import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratulaComponent } from './caratula.component';

describe('CaratulaComponent', () => {
  let component: CaratulaComponent;
  let fixture: ComponentFixture<CaratulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaratulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaratulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
