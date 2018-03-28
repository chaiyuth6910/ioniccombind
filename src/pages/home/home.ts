import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showProduct(){
    this.navCtrl.push(ProductPage);
  }

  listUsername()
  {
      alert("listUsername Work!!!");
  }

  listWeather()
  {
    alert("listWeather Work!!!");
  }

} // end class
