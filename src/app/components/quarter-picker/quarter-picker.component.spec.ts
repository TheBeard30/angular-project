import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterPickerComponent } from './quarter-picker.component';

describe('QuarterPickerComponent', () => {
  let component: QuarterPickerComponent;
  let fixture: ComponentFixture<QuarterPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarterPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
