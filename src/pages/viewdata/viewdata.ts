import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-viewdata',
  templateUrl: 'viewdata.html',
})
export class ViewdataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    
  }

  setData()
  {
    this.storage.set('name','Samit Koyom');
  }

  getData()
  {
    this.storage.get('name').then((val) => {
      alert('Your name is'+ val);
    });
  }

}
