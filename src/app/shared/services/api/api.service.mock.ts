import { ApiService } from './api.service';
import { of } from 'rxjs';

export class MockApiService {
    public get = jasmine.createSpy('get').and.returnValue(of());
}

export function createMockApiService() {
    return {
        provide: ApiService,
        useValue: MockApiService
    };
}
