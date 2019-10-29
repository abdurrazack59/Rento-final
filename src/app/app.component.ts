import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Rento select',
      url: '/home',
      icon: 'checkbox-outline'
    },
    {
      title: 'Book Now',
      url: '/home',
      icon: 'logo-model-s'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Share',
      url: '/home',
      icon: 'share'
    },
    {
      title: 'Offers',
      url: '/list',
      icon: 'ice-cream'
    },
    {
      title: 'Support',
      url: '/home',
      icon: 'build'
    },
    {
      title: 'About',
      url: '/home',
      icon: 'alert'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
