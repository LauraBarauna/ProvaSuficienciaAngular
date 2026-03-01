import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColab } from './new-colab';

describe('NewColab', () => {
  let component: NewColab;
  let fixture: ComponentFixture<NewColab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewColab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewColab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
