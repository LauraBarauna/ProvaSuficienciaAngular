import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabPersonalStep } from './collab-personal-step';

describe('CollabPersonalStep', () => {
  let component: CollabPersonalStep;
  let fixture: ComponentFixture<CollabPersonalStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollabPersonalStep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollabPersonalStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
