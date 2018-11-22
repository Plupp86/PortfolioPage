import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


import { portfolioRouting } from './portfolio.routing'
import { PortfolioComponent } from "./portfolio.component";





@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        portfolioRouting,
    ],
    declarations:
    [
        PortfolioComponent
    ],
    providers: [
    ],
})

export class PortfolioModule {}