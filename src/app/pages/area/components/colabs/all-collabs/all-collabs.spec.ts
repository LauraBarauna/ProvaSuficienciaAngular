import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCollabs } from './all-collabs';

describe('AllCollabs', () => {
  let component: AllCollabs;
  let fixture: ComponentFixture<AllCollabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCollabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCollabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
