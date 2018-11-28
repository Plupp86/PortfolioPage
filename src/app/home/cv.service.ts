import { ICv } from "./cv";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEducation } from "./education";
import { IExperience } from "./experience";


@Injectable()
export class CvService {

    getCv(): ICv { 
        return this.myCv;
    }


    myEducation: IEducation[] = [
        {
            issuer: 'Academy',
            course: 'C#.NET VT18',
            startDate: 'Jan 2018',
            endDate: 'Apr 2018',
            description: `A 12-week intensive course in C#.NET held by Academy, a part of Academic
            Work. The course focused mainly on C#.NET but also included for
            example SQL, JavaScript and Agile Development.` 
         },
         {
            issuer: 'Photon Sports',
            course: 'Master Thesis',
            startDate: 'Sep 2017',
            endDate: 'Jan 2018',
            description: `Improving repeatability and comparability in sports training using a
            3D-camera.` 
         },
         {
            issuer: 'Umeå University',
            course: 'Master of Science in Engineering Physics',
            startDate: 'Sep 2005',
            endDate: 'Jan 2012',
            description: `Major in measurement techniques and computational physics. I’ve taken
            advanced courses in for example Physical Properties of Measurement Devices
            and Non-invasive Measurement Methods.` 
         }
        ];

    myExperience: IExperience[] = [
        {
            title: 'Seismic observer',
            company: 'Shearwater Geophysical AS',
            startDate: 'Nov 2016',
            endDate: 'Jan 2018',
            description: `Online monitoring of seismic data and maintenance of seismic equipment
            both onboard and at sea. Writing, editing and following QHSE procedures.
            Working in for example India, Oman and Ireland.`
        },
        {
            title: 'Seismic observer',
            company: 'Dolphin Geophysical AS',
            startDate: 'June 2012',
            endDate: 'Dec 2015',
            description: `Online monitoring of seismic data and maintenance of seismic equipment
            both onboard and at sea. Writing, editing and following QHSE procedures.
            Working in Australia, Singapore, Myanmar, Colombia and Europe.`
        },
        {
            title: 'Student pub manager',
            company: 'Kårhuset Origo',
            startDate: 'May 2009',
            endDate: 'June 2010',
            description: `Responsible for the daily operations, including receiving bookings and
            sending orders. I was also in charge of the voluntary workers, their
            education and making sure laws and regulations were followed.`
        }
    ]

    myCv: ICv = {
        education: this.myEducation,
        experience: this.myExperience
    }
}