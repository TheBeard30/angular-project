import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GristerComponent } from './grister.component';

describe('GristerComponent', () => {
  let component: GristerComponent;
  let fixture: ComponentFixture<GristerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GristerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GristerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
