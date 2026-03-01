import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuTop } from './nav-menu-top';

describe('NavMenuTop', () => {
  let component: NavMenuTop;
  let fixture: ComponentFixture<NavMenuTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuTop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
