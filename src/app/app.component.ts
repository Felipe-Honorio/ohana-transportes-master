import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PoComponentsModule,
  PoMenuItem,
  PoMenuModule,
  PoModalComponent,
  PoModalModule,
  PoPageAction,
  PoPageModule,
  PoTableColumn,
  PoTableModule,
  PoTagType,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoUiModule } from './shared/modules/po-ui/po-ui.module';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoUiModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
