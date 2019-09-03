import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasListaComponent } from './notas-lista.component';

describe('NotasListaComponent', () => {
  let component: NotasListaComponent;
  let fixture: ComponentFixture<NotasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
