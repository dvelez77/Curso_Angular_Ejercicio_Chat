import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasalasComponent } from './listasalas.component';

describe('ListasalasComponent', () => {
  let component: ListasalasComponent;
  let fixture: ComponentFixture<ListasalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
