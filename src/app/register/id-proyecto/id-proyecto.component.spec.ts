import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProyectoComponent } from './id-proyecto.component';

describe('IdProyectoComponent', () => {
  let component: IdProyectoComponent;
  let fixture: ComponentFixture<IdProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
