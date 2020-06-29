import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntFinanEditComponent } from './ent-finan-edit.component';

describe('EntFinanEditComponent', () => {
  let component: EntFinanEditComponent;
  let fixture: ComponentFixture<EntFinanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntFinanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntFinanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
