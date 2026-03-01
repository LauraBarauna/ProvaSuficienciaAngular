import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabFinacialStep } from './collab-finacial-step';

describe('CollabFinacialStep', () => {
  let component: CollabFinacialStep;
  let fixture: ComponentFixture<CollabFinacialStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollabFinacialStep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollabFinacialStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
