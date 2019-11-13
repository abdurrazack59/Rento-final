import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var google;

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.page.html',
  styleUrls: ['./googlemap.page.scss'],
})
export class GooglemapPage implements OnInit, AfterViewInit {

  directionForm: FormGroup;

  @ViewChild('mapElement', { static: false }) gmap: ElementRef;

  map: google.maps.Map;

  latitude: any;
  longitude: any;

  coordinates = new google.maps.LatLng(this.latitude, this.longitude);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  // tslint:disable-next-line: new-parens
  directionsService = new google.maps.DirectionsService;
  // tslint:disable-next-line: new-parens
  directionsDisplay = new google.maps.DirectionsRenderer;


  constructor(private geolocation: Geolocation, private fb: FormBuilder) {
    this.createDirectionForm();
  }

  createDirectionForm() {
    this.directionForm = this.fb.group({
      pickup: ['', Validators.required],
      drop: ['', Validators.required]
    });
  }


  ngOnInit() {

  }

  ngAfterViewInit(): void {


    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const infoWindow = new google.maps.InfoWindow;
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(this.map);
      this.map.setCenter(pos);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.mapInitializer();
  }


  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }


  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route({
      origin: formValues.source,
      destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}



