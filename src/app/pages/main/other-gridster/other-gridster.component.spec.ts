import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherGridsterComponent } from './other-gridster.component';

describe('OtherGridsterComponent', () => {
  let component: OtherGridsterComponent;
  let fixture: ComponentFixture<OtherGridsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherGridsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherGridsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
