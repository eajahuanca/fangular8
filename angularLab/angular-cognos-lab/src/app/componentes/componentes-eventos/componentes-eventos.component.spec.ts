import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesEventosComponent } from './componentes-eventos.component';

describe('ComponentesEventosComponent', () => {
  let component: ComponentesEventosComponent;
  let fixture: ComponentFixture<ComponentesEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
