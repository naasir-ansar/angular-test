import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JsonDataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('./assets/payload.json');
  }
}
