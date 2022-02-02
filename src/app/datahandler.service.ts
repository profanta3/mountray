import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  constructor(private http: HttpClient) { }

  getData() {
    //return this.http.get("https://raw.githubusercontent.com/profanta3/mountray/master/src/server/dataset.json?token=GHSAT0AAAAAABRFYKLOXBU4TRIPXYJMLAUWYP2TIKA");
    //return this.http.get("http://127.0.0.1:3000/mountains");
    return this.http.get("https://raw.githubusercontent.com/profanta3/SPA/main/server/dataset.json");
  }

  putData(newMountain: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<object>('http://localhost:4200/api/v1/mountains', JSON.stringify(newMountain), {headers: headers})
        .subscribe();
  }

  getDataLocal() {
    //return this.http.get("https://raw.githubusercontent.com/profanta3/mountray/master/src/server/dataset.json?token=GHSAT0AAAAAABRFYKLOXBU4TRIPXYJMLAUWYP2TIKA");
    return this.http.get("http://127.0.0.1:4200/api/v1/mountains");
    //return this.http.get("https://raw.githubusercontent.com/profanta3/SPA/main/server/dataset.json");
  }
}