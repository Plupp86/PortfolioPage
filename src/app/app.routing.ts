import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'about', component: AboutComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);