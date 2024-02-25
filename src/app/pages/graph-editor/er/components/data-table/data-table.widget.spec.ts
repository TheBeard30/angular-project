import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableWidget } from './data-table.widget';

describe('DataTableWidget', () => {
  let component: DataTableWidget;
  let fixture: ComponentFixture<DataTableWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableWidget ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
