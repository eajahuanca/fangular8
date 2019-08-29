import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisalertasComponent } from './misalertas.component';

describe('MisalertasComponent', () => {
  let component: MisalertasComponent;
  let fixture: ComponentFixture<MisalertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisalertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisalertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
