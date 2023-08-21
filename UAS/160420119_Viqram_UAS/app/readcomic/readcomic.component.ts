import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-readcomic',
  templateUrl: './readcomic.component.html',
  styleUrls: ['./readcomic.component.scss'],
})
export class ReadcomicComponent implements OnInit {
  url_poster: string = "";
  page: string = "";
  readComics = null;
  iduser: any;
  idcomic: any;
  add_fav_error: string = '';

  constructor(private storage: Storage, public fs: FavoriteService, public route: ActivatedRoute) { }

  async ngOnInit() {
    this.iduser = await this.storage.get("iduser");
    this.idcomic = this.route.snapshot.params['id'];
    this.readComic();
  }

  readComic() {
    this.fs.readComic(this.idcomic).subscribe(
      (data) => {
        this.readComics = data['data'];
      }
    );
  }

  addFav() {
    this.fs.addFav(this.iduser, this.idcomic).subscribe(
      (data) => {
        if (data.result == "success") {
          this.iduser = data.iduser;
          this.idcomic = data.idcomic;
          console.log(this.iduser);
          console.log(this.idcomic);
        }
        else{
          this.add_fav_error = "Failed to add fav";
        }
      }
    );
  }
}
