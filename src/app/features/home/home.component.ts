import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PoComponentsModule, PoMenuItem, PoMenuModule, PoModalComponent, PoModalModule, PoPageAction, PoPageModule, PoTableColumn, PoTableModule, PoTagType, PoToolbarModule } from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoUiModule } from '../../shared/modules/po-ui/po-ui.module';

@Component({
  selector: 'app-home',
  imports: [
      CommonModule,
      PoUiModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('modal', {static: false}) modal!: PoModalComponent;
  
  readonly menus: Array<PoMenuItem> = [
    { 
      label: 'Home', 
      action: this.redirectHome.bind(this),
      icon: 'an an-house-line'
    },
    { 
      label: 'Documentos', 
      action: this.redirectDocuments.bind(this),
      icon: 'an an-files'
    },
    {
      label: 'Notas',
      action: this.redirectDocuments.bind(this),
      icon: 'an an-file-archive'
    }
  ];
  readonly logo: string = 'assets/img/logo.png';
  access: boolean = false;

  constructor(
    private router: Router
  ){}

  private redirectDocuments() {
    this.router.navigate(['ohana/documentos']);
  }

  private redirectHome() {
    this.router.navigate(['ohana/home']);
  }

  login(): void {
    this.access = true;
  }

}
