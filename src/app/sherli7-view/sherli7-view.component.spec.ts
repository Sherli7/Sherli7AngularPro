import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sherli7ViewComponent } from './sherli7-view.component';

describe('Sherli7ViewComponent', () => {
  let component: Sherli7ViewComponent;
  let fixture: ComponentFixture<Sherli7ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sherli7ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sherli7ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
