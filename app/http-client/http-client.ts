import { catchError, map, take } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

export class HttpClient {

  async delete(url: string) {
    return fetch(url, {
      method: 'DELETE',
    })
    .catch(error => { throw error; });
  }
  constructor() {}

  delete$(url: string) {
    return fromFetch(url, {
      method: 'DELETE',
    }).pipe(
      take(1), // Make http requests self completing
      catchError(error => { throw error; }),
    );
  }

  async get<T>(url: string) {
    return fetch(url)
      .then(res => res.json())
      .then(json => json as T)
      .catch(error => { throw error; });
  }

  get$<T>(url: string) {
    return fromFetch(url, { method: 'GET' }).pipe(
      take(1), // Make http requests self completing
      map(res => res.json()),
      map(json => json as T),
      catchError(error => { throw error; }),
    );
  }

  async patch<T>(url: string, body: object, headers: {[s: string]: string} = {'Content-type': 'application/json; charset=UTF-8'}) {
    return fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers,
    })
    .then(res => res.json())
    .then(json => json as T)
    .catch(error => { throw error; });
  }

  patch$<T>(url: string, body: object, headers: {[s: string]: string} = {'Content-type': 'application/json; charset=UTF-8'}) {
    return fromFetch(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers,

    }).pipe(
      take(1), // Make http requests self completing
      map(res => res.json()),
      map(json => json as T),
      catchError(error => { throw error; }),
    );
  }

  async put<T>(url: string, body: object, headers: {[s: string]: string} = {'Content-type': 'application/json; charset=UTF-8'}) {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers,
    })
    .then(res => res.json())
    .then(json => json as T)
    .catch(error => { throw error; });
  }

  put$<T>(url: string, body: object, headers: {[s: string]: string} = {'Content-type': 'application/json; charset=UTF-8'}) {
    return fromFetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers,

    }).pipe(
      take(1), // Make http requests self completing
      map(res => res.json()),
      map(json => json as T),
      catchError(error => { throw error; }),
    );
  }
}
