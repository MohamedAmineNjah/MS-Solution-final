import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererbanqueComponent } from './gererbanque.component';

describe('GererbanqueComponent', () => {
  let component: GererbanqueComponent;
  let fixture: ComponentFixture<GererbanqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererbanqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererbanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
