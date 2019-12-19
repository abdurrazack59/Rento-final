import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegisterApiService } from '../services/register-api.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  data: any = {};
  userName = 'Username';
  mobileNumber = '9876543210';
  userImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCEzGoZ6NCvbjg4hJlLL_0TLB61J8R2Xi09hoiSpGxXvVdTRoB';
  latitude: any;
  longitude: any;


  @ViewChild('mapElement', { static: true }) mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;

  constructor(private router: Router, private authService: AuthService,
    private registerApiService: RegisterApiService,
    private fb: FormBuilder,
    private geolocation: Geolocation) {
    this.createDirectionForm();
  }

  ngOnInit() {
    this.registerApiService.getUserDetails()
      .subscribe(data => {
        this.data = data.body;
        this.userName = data.body.firstName + ' ' + data.body.lastName;
        this.mobileNumber = data.body.mobileNumber;
      });

  }

  createDirectionForm() {
    this.directionForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    const options = {
      timeout: 25000,
      enableHighAccuracy: true
    };
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: { lat: 12.979316, lng: 77.599773 },
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      });
      this.directionsDisplay.setMap(map);
      /*location object*/
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      map.setCenter(pos);
      const icon = {
        url: '../assets/images/Map-Marker.png', // image url
        scaledSize: new google.maps.Size(50, 50), // scaled size
      };

      const marker = new google.maps.Marker({
        position: pos,
        map: map,
        optimized: false,
        // title: 'Hello World!',
        icon: icon
      });
      const infoWindow = new google.maps.InfoWindow;
      infoWindow.setPosition(pos);
      map.setCenter(pos);
      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });

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


  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    console.log('Logout Successful.');
  }

  hide() {
    if (this.router.url === '/home/ridenow') {
      return false;
    } else {
      return true;
    }
  }
  show() {
    if (this.router.url === '/home/ridenow') {
      return true;
    } else {
      return false;
    }
  }

}





