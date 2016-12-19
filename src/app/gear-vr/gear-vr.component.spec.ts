/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GearVrComponent } from './gear-vr.component';

describe('GearVrComponent', () => {
  let component: GearVrComponent;
  let fixture: ComponentFixture<GearVrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearVrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearVrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
