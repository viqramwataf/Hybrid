import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyKomikuService {
  login(name: string, password: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('name', name);
    body = body.set('password', password);
    return this.http.get('https://ubaya.fun/hybrid/160420119/uas/login_comic.php', {params: body})
  }
  constructor(private http: HttpClient) { }
}
