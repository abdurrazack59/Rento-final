import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import {ToastController,Platform,LoadingController} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.page.html',
  styleUrls: ['./googlemap.page.scss'],
})
export class GooglemapPage implements OnInit {

  map: GoogleMap;
  loading: any;
  directionForm: FormGroup;

  constructor(private fb: FormBuilder, public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private platform: Platform) {
  }



 async ngOnInit() {

    this.directionForm = this.fb.group({
      pickup: ['', Validators.required],
      drop: ['', Validators.required]
    });

    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });

  }

  async onButtonClick() {
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      console.log(JSON.stringify(location, null ,2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });

      // add a marker
      const marker: Marker = this.map.addMarkerSync({
        title: '@ionic-native/google-maps plugin!',
        snippet: 'This plugin is awesome!',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();

      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }



  // calculateAndDisplayRoute(form: NgForm) {
  //   const that = this;
  //   this.directionsService.route({
  //     origin: this.directionForm.value,
  //     destination: this.directionForm.value,
  //      // travelMode: 'DRIVING'
  //   }, (response, status) => {
  //     if (status === 'OK') {
  //       that.directionsDisplay.setDirections(response);
  //     } else {
  //       window.alert('Directions request failed due to ' + status);
  //     }
  //   });
  // }

}



