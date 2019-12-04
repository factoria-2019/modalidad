import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdEstComponent } from './id-est.component';

describe('IdEstComponent', () => {
  let component: IdEstComponent;
  let fixture: ComponentFixture<IdEstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdEstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
