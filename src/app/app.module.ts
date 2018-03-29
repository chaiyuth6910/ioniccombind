import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* Side Menu*/
import { SchedulePage } from '../pages/schedule/schedule';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { PaymentPage } from '../pages/payment/payment';
import { SettingPage } from '../pages/setting/setting';

/* Tab Menu */
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { CoursePage } from '../pages/course/course';
import { ServicePage } from '../pages/service/service';
import { ArticlePage } from '../pages/article/article';
import { ContactPage } from '../pages/contact/contact';
import { ProductPage } from '../pages/product/product';

/* Import สำหรับติดต่อ Web Service*/
import { HttpClientModule } from '@angular/common/http'
import { ProductdetailPage } from '../pages/productdetail/productdetail';
import { JsononlinePage } from '../pages/jsononline/jsononline';
import { UserdetailPage } from '../pages/userdetail/userdetail';
import { CallNumber } from '@ionic-native/call-number';
import { ViewmapPage } from '../pages/viewmap/viewmap';

import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { ViewdataPage } from '../pages/viewdata/viewdata';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchedulePage,
    PortfolioPage,
    PaymentPage,
    SettingPage,
    TabsPage,
    CoursePage,
    ServicePage,
    ArticlePage,
    ContactPage,
    ProductPage,
    ProductdetailPage,
    JsononlinePage,
    UserdetailPage,
    ViewmapPage,
    ViewdataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SchedulePage,
    PortfolioPage,
    PaymentPage,
    SettingPage,
    TabsPage,
    CoursePage,
    ServicePage,
    ArticlePage,
    ContactPage,
    ProductPage,
    ProductdetailPage,
    JsononlinePage,
    UserdetailPage,
    ViewmapPage,
    ViewdataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
