import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvgroupComponent } from './nouvgroup.component';

describe('NouvgroupComponent', () => {
  let component: NouvgroupComponent;
  let fixture: ComponentFixture<NouvgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
