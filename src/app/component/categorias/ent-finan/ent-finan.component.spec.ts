import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntFinanComponent } from './ent-finan.component';

describe('EntFinanComponent', () => {
  let component: EntFinanComponent;
  let fixture: ComponentFixture<EntFinanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntFinanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
