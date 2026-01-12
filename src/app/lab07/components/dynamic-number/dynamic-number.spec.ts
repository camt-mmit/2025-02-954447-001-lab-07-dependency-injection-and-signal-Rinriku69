import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNumber } from './dynamic-number';

describe('DynamicNumber', () => {
  let component: DynamicNumber;
  let fixture: ComponentFixture<DynamicNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicNumber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicNumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
