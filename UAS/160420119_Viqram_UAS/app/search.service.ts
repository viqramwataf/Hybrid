import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getComic(vcari: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('cari', vcari);
    return this.http.get('https://ubaya.fun/hybrid/160420119/uas/search_comic.php', {params: body})
  }
}
