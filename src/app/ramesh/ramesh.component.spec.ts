import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RameshComponent } from './ramesh.component';

describe('RameshComponent', () => {
  let component: RameshComponent;
  let fixture: ComponentFixture<RameshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RameshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RameshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
