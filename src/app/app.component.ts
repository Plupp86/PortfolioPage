import { isPlatformBrowser , DOCUMENT} from '@angular/common';
import { environment } from '../environments/environment';
import { Component, OnChanges , OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { Router } from '@angular/router';


import { Event as NavigationEvent } from "@angular/router";
import { NavigationEnd } from "@angular/router";
import { routerTransition } from './router.animation';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public ngOnInit(): void {
        if (!isPlatformBrowser(platformBrowser)) {
            let bases = document.getElementsByTagName('base');
    
            if (bases.length > 0) {
                bases[0].setAttribute('href', environment.baseHref);
            }
        }
    }

    getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  public activated: {
    home: boolean;
    about: boolean;
    portfolio: boolean;
  }

    private router: Router; 

  constructor (router: Router) {
    console.log(router);
    this.router = router;
    this.activated = {
      home: false,
      about: false,
      portfolio: false
    };

    this.router.events.subscribe(
      ( event: NavigationEvent ) : void => {

          if ( event instanceof NavigationEnd ) {
            this.activated.home = this.router.isActive( 'welcome', true);
            this.activated.about = this.router.isActive( 'about', true);
            this.activated.portfolio = this.router.isActive( 'portfolio',true);
            }
      }
    )
}

   drawCanvas (linkClicked: string): void {

      
    let underscore = document.getElementById('underscore');
    
      switch(linkClicked) {
      case 'welcome':
        underscore.style.transform = "translate(00%, 0%)";
        break;

        case 'portfolio':
        underscore.style.transform = "translate(67%, 0%)";
        break;

        case 'contact':
        underscore.style.transform = "translate(33%, 0%)";
    }     
  }
}
