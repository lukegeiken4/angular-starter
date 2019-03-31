import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { AppComponent } from './app.cmpt';


export class MockRouteShapshot { }
export class MockRouter {
  navigate = jasmine.createSpy('navigate');
  get url() {
    return jasmine.createSpy('url');
  }
}

describe('AppComponent', () => {
  let mockActivatedRoute: ActivatedRoute;

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: new MockRouteShapshot() }
        },
        {
          provide: Router,
          useValue: { snapshot: new MockRouter() }
        }
      ]
    }).compileComponents();

    const injector = getTestBed();
    mockActivatedRoute = injector.get(ActivatedRoute);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
