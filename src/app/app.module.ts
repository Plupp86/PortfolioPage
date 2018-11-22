import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './home/welcome.component';
import { HttpModule } from '@angular/http';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AboutComponent } from './home/about.component';
/* import 'rxjs/Rx'; */


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
    
  ]
})
export class AppModule { }
