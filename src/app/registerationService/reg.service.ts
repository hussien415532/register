import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class RegService {
  constructor(private http: HttpClient) {}
  baseURL: string = 'http://account.somee.com/api';
  register(data: any) {
    return this.http.post(`${this.baseURL}/Account/Register`, data);
  }
  login(data: any) {
    return this.http.post(`${this.baseURL}/Account/Login`, data);
  }
}
