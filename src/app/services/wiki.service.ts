import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Result} from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private httpClient: HttpClient) {
  }

  search(definition: string): Observable<any>{
    return this
      .httpClient
      .get<Result[]>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        srsearch: definition,
        utf8: '1',
        format: 'json',
        origin: '*'
      }
    });
  }
}
