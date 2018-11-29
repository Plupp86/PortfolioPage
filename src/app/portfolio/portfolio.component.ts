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
            name: 'My Portfolio',
            url: 'http://www.chrisryas.com',
            git: 'github.com',
            thumb: '/assets/img/thumbs/cr_thumb.jpg',
            description: 'The webpage you are currently on. Used to promote my skills as a developer.',
            tags: ['Angular','JavaScript','TypeScript','Front-End','AWS']
        },
        {
        name: 'Umeå BTK Ranking',
        url: 'http://ranking.umeabtk.se',
        git: 'github.com',
        thumb: '/assets/img/thumbs/umeabtk_thumb.jpg',
        description: 'A webpage used to submit matches and calculate a ranking for my table tennis club',
        tags: ['SQL','MVC','Unit Testing','Azure']
        },
        {
            name: 'Spelportalen',
            url: 'http://spelportalen.azurewebsites.net',
            git: 'github.com',
            thumb: '/assets/img/thumbs/spel_thumb.jpg',
            description: 'A gaming platform where one can play simple javascript games in real time.',
            tags: ['MVC','JavaScript','SignalR','Azure']    
        }
    ];

    


    /* ngOnInit(): void {
        
            if(this.router.url === '/'){
              this.home=false;
            }
        
    } */
    

    

 
}
