import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInsumoComponent } from './new-insumo.component';

describe('NewInsumoComponent', () => {
  let component: NewInsumoComponent;
  let fixture: ComponentFixture<NewInsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
