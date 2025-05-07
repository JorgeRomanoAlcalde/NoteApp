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

  public noteRequest(): Observable<any> {
    return this.http.get("http://localhost:3000/notes", this.getHeader);
  }

  public folderRequest(): Observable<any> {
    return this.http.get("http://localhost:3000/folders", this.getHeader);
  }

  public createNoteRequest(): Observable<any> {
    return this.http.post("http://localhost:3000/createNote", this.getHeader);
  }
}
