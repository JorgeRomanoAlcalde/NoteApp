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

  public createNote(newNote: { title: String; body: String; }): Observable<any> {
    return this.http.post<any>("http://localhost:3000/createNote", newNote, this.getHeader);
  }

  public editNote(newNote: { title: String; body: String; }): Observable<any> {
    return this.http.post<any>("http://localhost:3000/note/:id/edit", newNote, this.getHeader);
  }

  public createFolder(newFolder: { folder: String }): Observable<any> {
    return this.http.post<any>("http://localhost:3000/createFolder", newFolder, this.getHeader);
  }

  public discardNote(noteId: any ): Observable<any> {
    const url = `http://localhost:3000/note/${noteId}/discard`;
    return this.http.patch<any>(url, this.getHeader);
  }

  public recoverNote(noteId: any ): Observable<any> {
    const url = `http://localhost:3000/note/${noteId}/recover`;
    return this.http.patch<any>(url, this.getHeader);
  }

  public deleteNote(noteId: any ): Observable<any> {
    const url = `http://localhost:3000/note/${noteId}/delete`;
    return this.http.delete<any>(url, this.getHeader);
  }

  public deleteFolder(folderName: any ): Observable<any> {
    const url = `http://localhost:3000/folder/${folderName}/delete`;
    return this.http.delete<any>(url, this.getHeader);
  }
}
