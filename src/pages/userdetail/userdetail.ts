import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// เรียกใช้งาน HttpClient ไว้สำหรับติดต่อ Web API
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-userdetail',
  templateUrl: 'userdetail.html',
})
export class UserdetailPage {

    // รับค่าตัวแปรจาก product
    getuid:number; // property
    baseURL:string;
    udetail:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getuid = navParams.get('uid');
    this.baseURL = "https://jsonplaceholder.typicode.com/users/"+this.getuid;
  }

  ionViewDidLoad() {
    let ob = this.http.get(this.baseURL);
    ob.subscribe(
      (data:any) => {
        this.udetail = Array.of(data);
      }
    )
  }

}
