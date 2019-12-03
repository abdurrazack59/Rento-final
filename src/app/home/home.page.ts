import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegisterApiService } from '../services/register-api.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any = {};
  userName = '';
  mobileNumber = '';
  userImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCEzGoZ6NCvbjg4hJlLL_0TLB61J8R2Xi09hoiSpGxXvVdTRoB';

  @ViewChild('mapElement', { static: false }) mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;

  constructor(private router: Router, private authService: AuthService,
              private registerApiService: RegisterApiService,
              private fb: FormBuilder) {
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
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 }
    });
    this.directionsDisplay.setMap(map);
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

}




