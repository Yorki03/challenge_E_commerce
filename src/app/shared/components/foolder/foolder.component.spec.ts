/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoolderComponent } from './foolder.component';

describe('FoolderComponent', () => {
  let component: FoolderComponent;
  let fixture: ComponentFixture<FoolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
