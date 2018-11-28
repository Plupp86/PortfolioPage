import { Component, OnInit } from '@angular/core';
import { ICv } from './cv';
import { CvService } from './cv.service';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    public pageTitle: string = 'WelcomeComponent.PageTitle';
    myCv: ICv;

    constructor(private _cvService: CvService) {

    }

    ngOnInit(): void {
        this.myCv = this._cvService.getCv()
    }
}
