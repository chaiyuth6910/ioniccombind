import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { CoursePage } from '../../pages/course/course';
import { ServicePage } from '../../pages/service/service';
import { ArticlePage } from '../../pages/article/article';
import { ContactPage } from '../../pages/contact/contact';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  // สร้างตัวแปรเก็บชื่อ tab ไว้แสดงที่หน้า tabs.html
  tab1Root:any = HomePage;
  tab2Root:any = CoursePage;
  tab3Root:any = ServicePage;
  tab4Root:any = ArticlePage;
  tab5Root:any = ContactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
