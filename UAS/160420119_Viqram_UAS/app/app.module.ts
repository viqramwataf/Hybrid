import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MyKomikuService } from './my-komiku.service';
import { MykomikuComponent } from './mykomiku/mykomiku.component';
import { CategoryService } from './category.service';
import { CategoryComponent } from './category/category.component';
import { DetailcategoryComponent } from './detailcategory/detailcategory.component';
import { ReadcomicComponent } from './readcomic/readcomic.component';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';
import { FavoriteService } from './favorite.service';
import { FavoriteComponent } from './favorite/favorite.component';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'home', component: MykomikuComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'detailcategory/:id', component: DetailcategoryComponent},
  {path: 'readcomic/:id', component: ReadcomicComponent},
  {path: 'favorite', component: FavoriteComponent},
];

@NgModule({
  declarations: [ 
    ReadcomicComponent, 
    DetailcategoryComponent, 
    FavoriteComponent, 
    SearchComponent, 
    CategoryComponent, 
    MykomikuComponent, 
    AppComponent],
  imports: [
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes), 
    FormsModule, 
    IonicStorageModule.forRoot(), 
    HttpClientModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [
    FavoriteService, 
    SearchService, 
    CategoryService, 
    MyKomikuService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
