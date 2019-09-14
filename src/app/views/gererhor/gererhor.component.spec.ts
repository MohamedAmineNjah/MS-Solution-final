import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererhorComponent } from './gererhor.component';

describe('GererhorComponent', () => {
  let component: GererhorComponent;
  let fixture: ComponentFixture<GererhorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererhorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererhorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
