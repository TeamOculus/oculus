/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RiftReadyComponent } from './rift-ready.component';

describe('RiftReadyComponent', () => {
  let component: RiftReadyComponent;
  let fixture: ComponentFixture<RiftReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiftReadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiftReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
