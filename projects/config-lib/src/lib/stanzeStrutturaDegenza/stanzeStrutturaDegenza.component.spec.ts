/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StanzeStrutturaDegenzaComponent } from './stanzeStrutturaDegenza.component';

describe('StanzeStrutturaDegenzaComponent', () => {
  let component: StanzeStrutturaDegenzaComponent;
  let fixture: ComponentFixture<StanzeStrutturaDegenzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanzeStrutturaDegenzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanzeStrutturaDegenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
