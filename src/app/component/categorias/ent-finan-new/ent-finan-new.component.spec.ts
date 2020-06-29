import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntFinanNewComponent } from './ent-finan-new.component';

describe('EntFinanNewComponent', () => {
  let component: EntFinanNewComponent;
  let fixture: ComponentFixture<EntFinanNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntFinanNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntFinanNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
