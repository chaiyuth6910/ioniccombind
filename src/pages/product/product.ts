import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// เรียกใช้งาน HttpClient ไว้สำหรับติดต่อ Web API
import { HttpClient } from '@angular/common/http';
import { ProductdetailPage } from '../productdetail/productdetail';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  // กำหนดตัวแปรเก็บ URL ของเว็บ
  baseURL:string;
  product:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.baseURL = "http://localhost/ioincapi/showproduct.php";
  }

  ionViewDidLoad() {
    let ob = this.http.get(this.baseURL);
    ob.subscribe(
      (data:any) => {
        this.product = data;
      }
    )
    //console.log(this.product);
  }

  // คลิ๊กไปแสดงผลหน้า product detail
  productDetail(id){
    this.navCtrl.push(ProductdetailPage,{
      pid:id
    });
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      
      // ดึงข้อมูลจาก web api
      let ob = this.http.get(this.baseURL);
      ob.subscribe(
        (data:any) => {
          this.product = data;
        }
      )

      refresher.complete();
    }, 2000);
  }

} // end class