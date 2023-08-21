import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  readComic(id: number): Observable<any>{
    const body = new HttpParams().set('id', id);
    const ret = this.http.post('https://ubaya.fun/hybrid/160420119/uas/read_comic.php', body);
    return ret;
  }

  addFav(iduser: number, idcomic: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('iduser', iduser);
    body = body.set('idcomic', idcomic);
    return this.http.get('https://ubaya.fun/hybrid/160420119/uas/add_fav.php', {params: body})
  }

  userFav(id: number): Observable<any>{
    const body = new HttpParams().set('id', id);
    const ret = this.http.post('https://ubaya.fun/hybrid/160420119/uas/user_fav_comic.php', body);
    return ret;
  }

  constructor(private http: HttpClient) { }
}
