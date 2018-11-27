import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';


import { Event as NavigationEvent } from "@angular/router";
import { NavigationEnd } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Christofer Ryås - Hire me now!';
  
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

        case 'about':
        underscore.style.transform = "translate(33%, 0%)";
    }     
  }


    
}
