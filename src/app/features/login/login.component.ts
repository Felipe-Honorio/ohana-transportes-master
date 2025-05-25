import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PoUiModule } from '../../shared/modules/po-ui/po-ui.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    PoUiModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly logo: string = 'assets/img/logo.png';

  constructor(
    private router: Router
  ){}

  login(): void {
    this.router.navigate(['ohana', 'documentos']);
  }
}
