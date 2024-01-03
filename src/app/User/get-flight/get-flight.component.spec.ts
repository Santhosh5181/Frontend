import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFlightComponent } from './get-flight.component';

describe('GetFlightComponent', () => {
  let component: GetFlightComponent;
  let fixture: ComponentFixture<GetFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
