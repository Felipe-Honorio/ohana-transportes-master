import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PoUiModule } from '../shared/modules/po-ui/po-ui.module';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-features',
  imports: [
    CommonModule,
    PoUiModule,
    RouterOutlet
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  readonly menus: Array<PoMenuItem> = [
      { 
        label: 'CT-e', 
        action: this.redirectDocuments.bind(this),
        icon: 'an an-files'
      },
      {
        label: 'Rotas',
        action: this.redirectRoutes.bind(this),
        icon: 'an an-truck'
      }
    ];
    readonly logo: string = 'assets/img/logo.png';
    
  constructor(
    private router: Router,
  ) {}

    private redirectDocuments() {
        this.router.navigate(['ohana', 'documentos']);
    }

    private redirectRoutes() {
        this.router.navigate(['ohana', 'rotas']);
    }
}
