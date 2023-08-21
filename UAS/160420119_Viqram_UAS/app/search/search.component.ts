import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  search: string = '';
  comics = null;

  constructor(public ss: SearchService, public route: ActivatedRoute) { }

  getComic() {
    const vcari = this.route.snapshot.params['cari'];
    console.log(this.route.snapshot);
    
    this.ss.getComic(vcari).subscribe(
      (data) => {
        this.comics = data['data'];
      }
    );
  }

  ngOnInit() {
    this.getComic();
  }

}
