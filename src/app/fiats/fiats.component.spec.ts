import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiatsComponent } from './fiats.component';

describe('FiatsComponent', () => {
  let component: FiatsComponent;
  let fixture: ComponentFixture<FiatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
