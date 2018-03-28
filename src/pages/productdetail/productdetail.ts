import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// เรียกใช้งาน HttpClient ไว้สำหรับติดต่อ Web API
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-productdetail',
  templateUrl: 'productdetail.html',
})
export class ProductdetailPage {

  // รับค่าตัวแปรจาก product
  getpid:number; // property
  baseURL:string;
  pdetail:any;
  status:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getpid = navParams.get('pid');
    this.baseURL = "http://localhost/ioincapi/showproduct_detail.php?pid="+this.getpid;
    this.status = ["ไม่มีในสต็อก","มีสินค้าในสต็อก"];
  }

  ionViewDidLoad() {
    //alert(this.baseURL);
    let ob = this.http.get(this.baseURL);
    ob.subscribe(
      (data:any) => {
        this.pdetail = data;
      }
    )
  }

}
