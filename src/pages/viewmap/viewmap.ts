import { Component, ElementRef, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-viewmap',
  templateUrl: 'viewmap.html',
})
export class ViewmapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public geolocation: Geolocation) {
    
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){

    var im = "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/128/Map-Marker-Ball-Chartreuse.png";

    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
      /*
      this.map.moveCamera({
        'target':latLng,
        'title':60,
        'zoom':18
      },function(){
        console.log('Camera position changed.');
      });
      */
      
      // คำสั่งปักหมุดแสดงพิกัดตอนเริ่มเปิดแผนที่
      new google.maps.Marker({
        position: latLng,
        map: this.map,
        icon: im
      });
 

    }, (err) => {
      console.log(err);
    }); 

  }


  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      //position: this.map.getCenter()
      position: new google.maps.LatLng(13.7536555,100.5015464)
    });
    let content = "<h4>Information!</h4>";
    this.addInfoWindow(marker, content);
  }
 
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
 
 
  getCurrentPos()
  {
    alert("OK");
    this.loadMap();
  }

}
