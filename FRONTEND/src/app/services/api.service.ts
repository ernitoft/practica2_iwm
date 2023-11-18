import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endPoint = 'http://127.0.0.1:8000/api/profile';

  constructor(private http: HttpClient) {
  }

  public getProfile() {
    return this.http.get<any>(this.endPoint);
  }
}
