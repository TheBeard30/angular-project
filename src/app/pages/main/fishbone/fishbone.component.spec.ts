import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishboneComponent } from './fishbone.component';

describe('FishboneComponent', () => {
  let component: FishboneComponent;
  let fixture: ComponentFixture<FishboneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishboneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
