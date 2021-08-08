import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMonacoComponent } from './ng-monaco.component';

describe('NgMonacoComponent', () => {
  let component: NgMonacoComponent;
  let fixture: ComponentFixture<NgMonacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMonacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMonacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
