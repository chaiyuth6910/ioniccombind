import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-viewwebpage',
  templateUrl: 'viewwebpage.html',
})
export class ViewwebpagePage {

  url:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public inapp: InAppBrowser) {
    this.url ="https://www.itgenius.co.th/contact-us";
    const options: InAppBrowserOptions = {
      zoom:'no',
    }
    //const browser = this.inapp.create(this.url,'_self',options);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ViewwebpagePage');
  }

}
