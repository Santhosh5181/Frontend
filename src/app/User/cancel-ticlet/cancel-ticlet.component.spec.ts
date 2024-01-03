import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTicletComponent } from './cancel-ticlet.component';

describe('CancelTicletComponent', () => {
  let component: CancelTicletComponent;
  let fixture: ComponentFixture<CancelTicletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelTicletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelTicletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
