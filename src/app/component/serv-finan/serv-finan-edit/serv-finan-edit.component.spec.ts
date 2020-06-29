import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServFinanEditComponent } from './serv-finan-edit.component';

describe('ServFinanEditComponent', () => {
  let component: ServFinanEditComponent;
  let fixture: ComponentFixture<ServFinanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServFinanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServFinanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
