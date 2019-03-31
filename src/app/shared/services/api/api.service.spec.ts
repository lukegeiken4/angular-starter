import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ApiService } from './api.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { doesNotReject } from 'assert';

export class MockRouteShapshot { }

describe('ApiService', () => {
  let mockActivatedRoute: ActivatedRoute;
  let mockHttp: HttpTestingController;

  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApiService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: new MockRouteShapshot() }
        }
      ]
    }).compileComponents();

    const injector = getTestBed();
    service = injector.get(ApiService);
    mockActivatedRoute = injector.get(ActivatedRoute);
    mockHttp = injector.get(HttpTestingController);
  }));

  it('should create', () => {
    expect(service).not.toBeNull();
  });

  describe('Method get():', () => {
    it('should call http.get with given params', (done) => {
      const url = '/fake-endpoint';
      const params = new HttpParams().set('id', 'fake-id');
      const headers = new HttpHeaders();

      const expectedApi = `https://<api-domain>${url}`;

      service.get(url, params, headers).subscribe((res: any) => {
        expect(res).toBeTruthy();
        done();
      });

      const req = mockHttp.expectOne(req => req.method === 'GET' && req.url === expectedApi);
      expect(req.request.params).toEqual(params);
      expect(req.request.headers).toEqual(headers);
      req.flush({});
    });
  });
});
