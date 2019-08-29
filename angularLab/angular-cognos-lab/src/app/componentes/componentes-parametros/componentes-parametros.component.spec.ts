import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesParametrosComponent } from './componentes-parametros.component';

describe('ComponentesParametrosComponent', () => {
  let component: ComponentesParametrosComponent;
  let fixture: ComponentFixture<ComponentesParametrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesParametrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
