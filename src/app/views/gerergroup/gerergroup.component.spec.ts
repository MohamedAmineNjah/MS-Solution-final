import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerergroupComponent } from './gerergroup.component';

describe('GerergroupComponent', () => {
  let component: GerergroupComponent;
  let fixture: ComponentFixture<GerergroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerergroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
