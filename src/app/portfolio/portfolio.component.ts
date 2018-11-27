import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cr-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})




export class PortfolioComponent {

    portfolio: any[] = [
        {
            name: 'www.chrisryas.com',
            url: 'http://www.chrisryas.com',
            git: 'github.com',
            thumb: '/assets/img/logo_small.png',
            description: 'The webpage you are currently on. Used to promoto my awesome skills as a developer.',
            tags: ['Angular','JavaScript','TypeScript','Front-End']
        },
        {
        name: 'ranking',
        url: 'http://ranking.umeabtk.se',
        git: 'github.com',
        thumb: 'https://www2.idrottonline.se/globalassets/umea-btk---bordtennis/bilder/annat/umea-btk-header.jpg',
        description: 'A webpage used to submit matches and calculate a ranking for me table tennis club',
        tags: ['SQL','MVC']
        },
        {
            name: 'spelportalen',
            url: 'http://spelportalen.azurewebsites.net',
            git: 'github.com',
            thumb: 'http://spelportalen.azurewebsites.net/Images/prototype_log4_white_smaller.png',
            description: 'A gaming platform where one can play simple javascript games in real time.',
            tags: ['MVC','JavaScript','SignalR']    
        }
    ];

    


    /* ngOnInit(): void {
        
            if(this.router.url === '/'){
              this.home=false;
            }
        
    } */
    

    

 
}
