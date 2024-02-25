import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarWidget } from './toolbar.widget';

describe('ToolbarWidget', () => {
  let component: ToolbarWidget;
  let fixture: ComponentFixture<ToolbarWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarWidget ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
