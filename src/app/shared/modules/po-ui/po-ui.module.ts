import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoAccordionModule, PoButtonModule, PoChartModule, PoDisclaimerModule, PoFieldModule, PoModule, PoPageModule, PoTabsModule, PoTagModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoTemplatesModule } from '@po-ui/ng-templates';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoModule,
    PoTabsModule,
    PoDisclaimerModule,
    PoButtonModule,
    PoChartModule,
    ReactiveFormsModule,
    FormsModule,
    PoAccordionModule,
    PoFieldModule,
    PoPageModule,
    PoTagModule,
    PoTemplatesModule,
  ],
  exports: [
    CommonModule,
    PoModule,
    PoTabsModule,
    PoDisclaimerModule,
    PoButtonModule,
    PoChartModule,
    ReactiveFormsModule,
    FormsModule,
    PoAccordionModule,
    PoFieldModule,
    PoPageModule,
    PoTagModule,
    PoTemplatesModule
  ]
})
export class PoUiModule { }
