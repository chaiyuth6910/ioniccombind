import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { JsononlinePage } from '../jsononline/jsononline';

import { App } from 'ionic-angular'
import { ViewmapPage } from '../viewmap/viewmap';
import { ViewdataPage } from '../viewdata/viewdata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  showProduct(){
    this.app.getRootNav().push(ProductPage);
    //this.navCtrl.push(ProductPage);
  }

  listUsername()
  {
      this.app.getRootNav().push(JsononlinePage);
      //this.navCtrl.push(JsononlinePage);
  }

  listWeather()
  {
    alert("listWeather Work!!!");
  }

  viewMap()
  {
    this.app.getRootNav().push(ViewmapPage);
  }

  showData()
  {
    this.app.getRootNav().push(ViewdataPage);
  }

} // end class
