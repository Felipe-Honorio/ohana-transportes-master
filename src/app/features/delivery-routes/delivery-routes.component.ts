import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  PoModalAction,
  PoModalComponent,
  PoPageAction,
  PoTableColumn,
  PoDynamicFormField,
  PoTagModule,
  PoButtonModule,
  PoTagType
} from '@po-ui/ng-components';
import { PoUiModule } from '../../shared/modules/po-ui/po-ui.module';

@Component({
  selector: 'app-delivery-routes',
  standalone: true,
  imports: [
    CommonModule,
    PoUiModule,
    PoTagModule,
    PoButtonModule
  ],
  templateUrl: './delivery-routes.component.html',
  styleUrl: './delivery-routes.component.css'
})
export class DeliveryRoutesComponent {
  PoTagType = PoTagType;
  @ViewChild('routeModal') routeModal!: PoModalComponent;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Incluir', icon: 'po-icon po-icon-plus', action: () => this.openModal() },
  ];

  columns: Array<PoTableColumn> = this.getColumns();
  items: Array<any> = this.getItems().map(item => ({ 
    ...item,
    expandido: false // Adiciona estado de expansão
  }));

  // Nova função para alternar expansão
  toggleExpand(clickedItem: any): void {
    console.log('Clicou no item:', clickedItem);
    this.items = this.items.map(item => ({
      ...item,
      expandido: item === clickedItem ? !item.expandido : false
    }));
  }

  formFields: Array<PoDynamicFormField> = [
    { property: 'cep', label: 'CEP', required: true },
    { property: 'endereco', label: 'Endereço', required: true },
    { property: 'numero', label: 'Nº', required: true },
    { property: 'bairro', label: 'Bairro', required: true },
    { property: 'cidade', label: 'Cidade', required: true },
    { property: 'estado', label: 'UF', required: true },
    { property: 'motorista', label: 'Motorista', required: true },
    { property: 'codigo', label: 'Código', required: true },
    { property: 'placa', label: 'Placa do Veículo', required: true },
    { property: 'veiculo', label: 'Veiculo', required: true },
  ];

  formData: any = {};

  openModal() {
    this.routeModal.open();
  }

  saveRoute() {
    console.log('Dados salvos:', this.formData);
    this.routeModal.close();
  }

  cancel() {
    this.routeModal.close();
  }

  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'pendente', label: 'Pendente', type: PoTagType.Warning },
          { value: 'entregue', label: 'Entregue', type: PoTagType.Success }
        ]},
      { property: 'Nome', type: 'string', width: '8%' },
      { property: 'Codigo', type: 'string' },
      { property: 'Motorista', type: 'string' },
      { property: 'Cep', type: 'string' },
      { property: 'Rua', type: 'string' },
      { property: 'Nº', type: 'string' },
      { property: 'Bairro', type: 'string' },
      { property: 'Cidade', type: 'string' },
      { property: 'UF', type: 'string' },
      { property: 'Placa', type: 'string' },
      { property: 'Veiculo', type: 'string' },
      { property: 'Data', type: 'string' },
      { property: 'Hora', type: 'string' },
    ];
  }

  getItems(): Array<any> {
    return [
      {
        Nome: 'Documento teste',
        Motorista: 'Joao',
        Data: '01/04/2025',
        Hora: '16:53:00',
        status: 'pendente',
        Veiculo: 'Iveco',
        Placa: 'GGY2D68',
        UF: 'SP',
        Cidade: 'São Paulo',
        Bairro: 'Jd Laranjeira',
        N: '116',
        Rua: 'Pedra Branca do Amapari',
        Cep: '08381-000',
        Codigo: '00000'
      },
      {
        Nome: 'Documento 002',
        Motorista: 'Carol',
        Data: '01/04/2025',
        Hora: '12:53:00',
        status: 'pendente',
        Veiculo: 'Iveco',
        Placa: 'GGY2D68',
        UF: 'SP',
        Cidade: 'São Paulo',
        Bairro: 'Jd Laranjeira',
        N: '116',
        Rua: 'Pedra Branca do Amapari',
        Cep: '08381-000',
        Codigo: '00000'
      },
      {
        Nome: 'Documento 003',
        Motorista: 'Maria',
        Data: '01/04/2025',
        Hora: '09:53:00',
        status: 'pendente',
        Veiculo: 'Iveco',
        Placa: 'GGY2D68',
        UF: 'SP',
        Cidade: 'São Paulo',
        Bairro: 'Jd Laranjeira',
        N: '116',
        Rua: 'Pedra Branca do Amapari',
        Cep: '08381-000',
        Codigo: '00000'
      },
      {
        Nome: 'Documento 004',
        Motorista: 'John',
        Data: '01/04/2025',
        Hora: '10:53:00',
        status: 'pendente',
        Veiculo: 'Iveco',
        Placa: 'GGY2D68',
        UF: 'SP',
        Cidade: 'São Paulo',
        Bairro: 'Jd Laranjeira',
        N: '116',
        Rua: 'Pedra Branca do Amapari',
        Cep: '08381-000',
        Codigo: '00000'
      },
      {
        Nome: 'Documento 005',
        Motorista: 'Jose',
        Data: '01/04/2025',
        Hora: '17:53:00',
        status: 'entregue',
        Veiculo: 'Iveco',
        Placa: 'GGY2D68',
        UF: 'SP',
        Cidade: 'São Paulo',
        Bairro: 'Jd Laranjeira',
        N: '116',
        Rua: 'Pedra Branca do Amapari',
        Cep: '08381-000',
        Codigo: '00000'
      }
    ];
  }
}
