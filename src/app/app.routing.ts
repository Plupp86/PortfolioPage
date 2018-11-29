import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';
import { ContactComponent } from './home/contact.component';


const appRoutes: Routes = [
    { path: '', component: WelcomeComponent, data: {state: 'start'} },
    { path: 'welcome', component: WelcomeComponent, data: {state: 'home'} },
    { path: 'contact', component: ContactComponent, data: {state: 'contact'} }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes, {
        useHash: true
    });