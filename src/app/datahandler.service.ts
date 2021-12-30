import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("127.0.0.1:3000/mountains");
  }
}
