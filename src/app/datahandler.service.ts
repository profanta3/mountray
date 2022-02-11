import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://127.0.0.1:4200/api/v1/mountains"

  getData(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  putData(newMountain: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<object>('http://localhost:4200/api/v1/mountains', JSON.stringify(newMountain), {headers: headers})
        .subscribe();
  }

  getDataLocal() {
    return this.http.get(`${this.baseUrl}`);
  }

  editData(id: number, newMountain: object) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    console.log("Send put request to : ", `${this.baseUrl}/${id}`);
    console.log("...with body: ", JSON.stringify(newMountain));
    return this.http.put(`${this.baseUrl}/${id}`, JSON.stringify(newMountain), {headers: headers})    
  }

  removeData(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  public currentFilteredList: string = "";
}