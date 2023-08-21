import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  categoryAPI(): Observable<any> {
    return this.http.get('https://ubaya.fun/hybrid/160420119/uas/category.php');
  }

  detailCategory(id: number): Observable<any>{
    const body = new HttpParams().set('id', id);
    const ret = this.http.post('https://ubaya.fun/hybrid/160420119/uas/detail_category.php', body);
    return ret;
  }

  addRate(iduser: number, idcomic: number, rating: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('iduser', iduser);
    body = body.set('idcomic', idcomic);
    body = body.set('rating', rating);
    return this.http.get('https://ubaya.fun/hybrid/160420119/uas/add_rate.php', {params: body})
  }

  showRate(id: number): Observable<any>{
    const body = new HttpParams().set('idcategory', id);
    const ret = this.http.post('https://ubaya.fun/hybrid/160420119/uas/rate_comic.php', body);
    return ret;
  }

  updateRate(rating: number, iduser: number, idcomic: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('rating', rating);
    body = body.set('iduser', iduser);
    body = body.set('idcomic', idcomic);
    return this.http.get('https://ubaya.fun/hybrid/160420119/uas/update_rating.php', {params: body})
  }
}
