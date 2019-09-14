import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererapplComponent } from './gererappl.component';

describe('GererapplComponent', () => {
  let component: GererapplComponent;
  let fixture: ComponentFixture<GererapplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererapplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererapplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
