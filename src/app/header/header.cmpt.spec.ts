import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { HeaderComponent } from './header.cmpt';


export class MockRouteShapshot { }

describe('HeaderComponent', () => {
  let mockActivatedRoute: ActivatedRoute;

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: new MockRouteShapshot() }
        }
      ]
    }).compileComponents();

    const injector = getTestBed();
    mockActivatedRoute = injector.get(ActivatedRoute);

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
