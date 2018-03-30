import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { SchedulePage } from '../pages/schedule/schedule';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { PaymentPage } from '../pages/payment/payment';
import { SettingPage } from '../pages/setting/setting';
import { IntroPage } from '../pages/intro/intro';

/*ใส่การโหลดหน้าจอ*/
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/* Push Notification */
import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;
  loader: any;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    private fcm: FCM
  ) {

    this.presentLoading();
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Schedule', component: SchedulePage, icon: 'md-calendar' },
      { title: 'Portfolio', component: PortfolioPage, icon: 'md-albums' },
      { title: 'Payment', component: PaymentPage, icon: 'logo-bitcoin' },
      { title: 'Setting', component: SettingPage, icon: 'md-settings' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      /* เขียนเงื่อนไขตรวจสอบว่ามีการเข้าใช้งานครั้งแรกหรือไม่*/
      this.storage.get('introShow').then((result) => {
        if (result) {
          // เคยเข้าใช้งานแล้ว
          this.rootPage = TabsPage;
        } else {
          // เข้าใช้งานครั้งแรก
          this.rootPage = IntroPage;
          this.storage.set('introShow', true);
        }

        // ปิดการโหลด
        this.loader.dismiss();
      });

      /*
      //Notifications
      this.fcm.subscribeToTopic('all');
      this.fcm.getToken().then(token => {
        alert(token);
        console.log(token);
      })
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          alert('Received in background');
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
          alert('Received in foreground');
        };
      })
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
        alert(token);
      });
      //end notifications.
      */

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }


  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "กำลังโหลดหน้าจอ รอสักครู่..."
    });
    this.loader.present();
  }

}
