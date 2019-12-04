import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdSemilleroComponent } from './id-semillero.component';

describe('IdSemilleroComponent', () => {
  let component: IdSemilleroComponent;
  let fixture: ComponentFixture<IdSemilleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdSemilleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdSemilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
