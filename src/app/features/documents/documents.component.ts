import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { PoUiModule } from '../../shared/modules/po-ui/po-ui.module';
import { PoModalComponent, PoPageAction, PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Component({
  selector: 'app-documents',
  imports: [
    CommonModule,
    PoUiModule
  ],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {
  @ViewChild('modal', {static: false}) modal!: PoModalComponent;
  
  public readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', icon: 'an an-share', action: this.new.bind(this) },
  ];

  columns: Array<PoTableColumn> = this.getColumns();
  items: Array<any> = this.getItems();
  
  new(): void {
    this.modal.open();
  }

  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'pendente', color: 'blue', label: 'Pendente' },
          { value: 'entregue', label: 'Entregue', type: PoTagType.Success },
        ]
      },
      { property: 'Nome', type: 'string', width: '8%' },
      { property: 'Usuario', type: 'string' },
      { property: 'Data', type: 'string' },
      { property: 'Hora', type: 'string' }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        Nome: 'Documento teste',
        Usuario: 'Joao',
        Data: '01/04/2025',
        Hora: '16:53:00',
        status: 'pendente',
      },
      {
        Nome: 'Documento 002',
        Usuario: 'Carol',
        Data: '01/04/2025',
        Hora: '12:53:00',
        status: 'pendente',
      },
      {
        Nome: 'Documento 003',
        Usuario: 'Maria',
        Data: '01/04/2025',
        Hora: '09:53:00',
        status: 'pendente',
      },
      {
        Nome: 'Documento 004',
        Usuario: 'John',
        Data: '01/04/2025',
        Hora: '10:53:00',
        status: 'pendente',
      },
      {
        Nome: 'Documento 005',
        Usuario: 'Jose',
        Data: '01/04/2025',
        Hora: '17:53:00',
        status: 'entregue',
      }
    ]
  }
}
