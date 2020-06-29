import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServFinanNewComponent } from './serv-finan-new.component';

describe('ServFinanNewComponent', () => {
  let component: ServFinanNewComponent;
  let fixture: ComponentFixture<ServFinanNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServFinanNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServFinanNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
