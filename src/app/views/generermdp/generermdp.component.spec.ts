import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerermdpComponent } from './generermdp.component';

describe('GenerermdpComponent', () => {
  let component: GenerermdpComponent;
  let fixture: ComponentFixture<GenerermdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerermdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerermdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
