import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// เรียกใช้งาน HttpClient ไว้สำหรับติดต่อ Web API
import { HttpClient } from '@angular/common/http';
import { UserdetailPage } from '../userdetail/userdetail';

import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-jsononline',
  templateUrl: 'jsononline.html',
})
export class JsononlinePage {

    // กำหนดตัวแปรเก็บ URL ของเว็บ
    baseURL:string;
    userList:any;

  constructor(private calnum: CallNumber, public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.baseURL = "https://jsonplaceholder.typicode.com/users";
  }

  ionViewDidLoad() {
    let ob = this.http.get(this.baseURL);
    ob.subscribe(
      (data:any) => {
        this.userList = data;
      }
    )
  }

  viewUserDetail(id)
  {
    this.navCtrl.push(UserdetailPage,{
      uid:id
    });
  }


  callNumber(phone_number){
    //alert(phone_number);
    this.calnum.callNumber(phone_number,true);
  }

}
