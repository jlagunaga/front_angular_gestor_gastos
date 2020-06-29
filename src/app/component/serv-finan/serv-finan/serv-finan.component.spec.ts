import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServFinanComponent } from './serv-finan.component';

describe('ServFinanComponent', () => {
  let component: ServFinanComponent;
  let fixture: ComponentFixture<ServFinanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServFinanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
