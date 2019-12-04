import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdEstCoorComponent } from './id-est-coor.component';

describe('IdEstCoorComponent', () => {
  let component: IdEstCoorComponent;
  let fixture: ComponentFixture<IdEstCoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdEstCoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdEstCoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
