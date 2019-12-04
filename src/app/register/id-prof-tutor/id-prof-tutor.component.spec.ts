import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProfTutorComponent } from './id-prof-tutor.component';

describe('IdProfTutorComponent', () => {
  let component: IdProfTutorComponent;
  let fixture: ComponentFixture<IdProfTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdProfTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdProfTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
