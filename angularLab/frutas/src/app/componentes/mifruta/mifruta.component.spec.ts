import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MifrutaComponent } from './mifruta.component';

describe('MifrutaComponent', () => {
  let component: MifrutaComponent;
  let fixture: ComponentFixture<MifrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MifrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MifrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
