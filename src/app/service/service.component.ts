import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponent {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  getHeader = { headers: this.headers, withCredentials: true };

  constructor(private http: HttpClient) {}

  public testRequest(): Observable<any> {
    return this.http.get("http://localhost:3000/blogs", this.getHeader);
  }
}
