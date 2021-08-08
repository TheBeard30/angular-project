import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERComponent } from './er.component';

describe('ERComponent', () => {
  let component: ERComponent;
  let fixture: ComponentFixture<ERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
