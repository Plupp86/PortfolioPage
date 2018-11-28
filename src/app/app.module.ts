import { NgtUniversalModule } from '@ng-toolkit/universal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './home/welcome.component';
import { HttpModule } from '@angular/http';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AboutComponent } from './home/about.component';
import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CvService } from './home/cv.service';



/* import 'rxjs/Rx'; */


/* var routes: Routes = [
  {
      path: "parent/:id",
      component: ParentComponent,
      children: [
          {
              path: "child/:id",
              component: ChildComponent
          }
      ]
  },
  {
      path: "**",
      redirectTo: "/"
  }
]; */


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
    CommonModule,
    
    HttpModule,
    PortfolioModule,
    BrowserAnimationsModule,
    routing,
  ],
  providers: [CvService],
})
export class AppModule { }
