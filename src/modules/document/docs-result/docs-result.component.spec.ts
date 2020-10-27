/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DocsResultComponent } from './docs-result.component';

describe('DocsResultComponent', () => {
  let component: DocsResultComponent;
  let fixture: ComponentFixture<DocsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
