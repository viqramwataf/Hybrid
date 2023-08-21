import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MyKomikuService } from './my-komiku.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  iduser:any;
  name:any;
  login_user:any;
  login_passwd:any;
  login_error:any;
  constructor(private storage: Storage, public mks: MyKomikuService) {}
  async ngOnInit() {
    await this.storage.create();
    this.iduser = await this.storage.get("iduser");
    this.name = await this.storage.get("name");
    // console.log(this.name);
  }
  login() {
    this.mks.login(this.login_user, this.login_passwd).subscribe(
      (data) => {
        if (data.result == 'success') {
          this.iduser = data.iduser;
          this.name = data.name;
          this.storage.set('iduser', this.iduser);
          this.storage.set('name', this.name);
        }
        else{
          // console.log(data);
          this.login_error="Username atau password salah";
        }
      }
    )
  }
  logout() {
    this.storage.remove('name');
    window.location.reload();
  }
}
