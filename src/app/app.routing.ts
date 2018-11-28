import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';


const appRoutes: Routes = [
    { path: '', component: WelcomeComponent, data: {state: 'start'} },
    { path: 'welcome', component: WelcomeComponent, data: {state: 'home'} },
    { path: 'about', component: AboutComponent, data: {state: 'about'} }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes, {
        useHash: true
    });