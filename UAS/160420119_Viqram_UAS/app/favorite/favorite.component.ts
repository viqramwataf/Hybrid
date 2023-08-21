import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { FavoriteService } from '../favorite.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  userFavs = null;
  iduser: any;

  constructor(private storage: Storage, public fs: FavoriteService, public route: ActivatedRoute) { }

  async ngOnInit() {
    this.iduser = await this.storage.get("iduser");
    this.userFavorite();
  }

  userFavorite() {
    this.fs.userFav(this.iduser).subscribe(
      (data) => {
        this.userFavs = data['data'];
      }
    );
  }
}
