import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private backendUrl: string;

  constructor(
      private http: HttpClient
  ) {

    // TODO: Move to config file
    this.backendUrl = 'https://<api-domain>';
  }

  /**
   * Sends out a GET request
   * @param url relative api path
   * @param params GET param
   * @param headers Request header
   */
  public get<T>(
      apiEndpoint: string,
      params?: HttpParams,
      headers?: HttpHeaders
  ): Observable<T> {

    const getObs = this.http
        .get<T>(this.backendUrl + apiEndpoint, {
            params: params,
            headers: headers
        }).pipe(share());

    return getObs;
  }
}
