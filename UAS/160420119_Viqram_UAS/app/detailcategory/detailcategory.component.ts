import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { CategoryService } from '../category.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-detailcategory',
  templateUrl: './detailcategory.component.html',
  styleUrls: ['./detailcategory.component.scss'],
})
export class DetailcategoryComponent implements OnInit {

  title: string = "";
  url_poster: string = "";
  detailComics = null;
  num_rating: number = 0;
  iduser: any;
  idcomic: any;
  idcategory: any;
  rating: any;
  add_rate_error: string = '';
  showRates = null;

  constructor(private storage: Storage, public cs: CategoryService, public route: ActivatedRoute) { }

  async ngOnInit() {
    this.iduser = await this.storage.get("iduser");
    this.idcomic = this.route.snapshot.params['id'];
    this.idcategory = this.route.snapshot.params['id'];
    this.detailCategory();
    this.showRate();
  }

  detailCategory() {
    // const idcategory = this.route.snapshot.params['id'];
    this.cs.detailCategory(this.idcategory).subscribe(
      (data) => {
        this.detailComics = data['data'];
      }
    );
  }

  addRate() {
    this.cs.addRate(this.iduser, this.idcomic, this.rating).subscribe(
      (data) => {
        if (data == null && data.result == 'success') {
          this.iduser = data.iduser;
          this.idcomic = data.idcomic;
          this.rating = data.rating;
        }
        else if (data =! null && data.result == 'success'){
          this.cs.updateRate(this.rating, this.iduser, this.idcomic).subscribe(
            (data) => {
              if (data.result == 'success') {
                this.rating = data.rating;
                this.iduser = data.iduser;
                this.idcomic = data.idcomic;
              }
              else{
                this.add_rate_error = "Failed to update rating";
              }
            }
          );
        }
        else{
          this.add_rate_error = "Failed to add rate";
        }
      }
    );
  }

  showRate() {
    this.cs.showRate(this.idcategory).subscribe(
      (data) => {
        this.showRates = data['data'];
      }
    );
  }
}
