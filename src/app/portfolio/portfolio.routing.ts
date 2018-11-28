import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';



export const portfolioRoutes: Routes = [
    { path: 'portfolio', component: PortfolioComponent, data: {state: 'portfolio'}  },
    /* { path: 'movie/:id', component: MovieDetailComponent } */
];

export const portfolioRouting: ModuleWithProviders = RouterModule.forChild(portfolioRoutes);