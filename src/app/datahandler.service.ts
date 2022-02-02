import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  constructor(private http: HttpClient) { }

  getData() {
    //return this.http.get("https://raw.githubusercontent.com/profanta3/mountray/master/src/server/dataset.json?token=GHSAT0AAAAAABRFYKLOXBU4TRIPXYJMLAUWYP2TIKA");
    //return this.http.get("http://127.0.0.1:3000/mountains");
    return this.http.get("http://10.211.55.4:8080/api/v1/mountains");
  }
}