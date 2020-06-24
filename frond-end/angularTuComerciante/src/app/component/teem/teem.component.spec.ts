import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeemComponent } from './teem.component';

describe('TeemComponent', () => {
  let component: TeemComponent;
  let fixture: ComponentFixture<TeemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
