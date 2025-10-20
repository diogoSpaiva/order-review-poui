import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PoBreadcrumbModule, PoButtonGroupItem, PoButtonGroupModule, PoButtonModule, PoInfoModule, PoNotificationService, PoTableColumn, PoTableModule, PoTagModule, PoTagType } from '@po-ui/ng-components';
import { OrderReviewService } from '../../core/service/order-review/order-review.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order-review',
  imports: [
    CommonModule,

    PoTagModule,
    PoInfoModule,
    PoTableModule,
    PoButtonModule,
    PoBreadcrumbModule,
    PoButtonGroupModule,
    
    HttpClientModule
  ],
  templateUrl: './order-review.component.html',
  styleUrl: './order-review.component.scss'
})
export class OrderReviewComponent implements OnInit {
  public columns: Array<PoTableColumn> = [
    { property: 'idPedido', label: '#' },
    { property: 'numero', label: 'Número' },
    { property: 'cliente', label: 'Cliente' },
    { property: 'emissao', label: 'Emissão' },
    { property: 'representante', label: 'Representante' },
    { property: 'dtEntrega', label: 'Data da entrega' },
    { property: 'condicaoPagamento', label: 'Cond. pagamento' },
    { property: 'total', label: 'Total' },
    // { property: 'rentabilidade', label: 'Rentabilidade' },
    // { property: 'ultimoPedido', label: 'Último pedido' },
    // { property: 'ultimadtEntrega', label: 'Última entrega' },
    // { property: 'ultimacondicaoPagamento', label: 'Última cond de pagamento' },
    // { property: 'ultimototal', label: 'Último total' },
    {
      property: 'idPedido',
      type: 'columnTemplate',
      label: 'Ações',
      sortable: false
    }
  ];

  public items: Array<any> = [];
  public isLoading = true;
  public action = 'idPedido';

  public PoTagType = PoTagType;

  public itemsDetails: Array<any> = [];
  public orderId: any;
  public columnsDetails: Array<PoTableColumn> = [

    { property: 'item', label: 'Item' },
    { property: 'descricao', label: 'Descrição' },
    { property: 'quantidade', label: 'Quant.' },
    { property: 'vlUnitario', label: 'Vl unit.' },
    { property: 'vlTotal', label: 'Vl total' },
    { property: 'tabela', label: 'Tabela' },
    { property: 'operacao', label: 'Operação' },
    { property: 'dtEntrega', label: 'Entrega' },
    { property: 'comissao', label: 'Comissão' },
    { property: 'df', label: 'DF' },
    { property: 'icms', label: 'ICMS' },
    { property: 'pis', label: 'PIS' },
    { property: 'confins', label: 'CONFIS' },
    { property: 'rentabilidade', label: 'Rentabilidade' },
    { property: 'descontoTabela', label: 'Desconto' },
  ];

  buttons: Array<PoButtonGroupItem> = [
    { label: 'Negar pedido', action: this.denyOrder.bind(this) },
    { label: 'Aprovar pedido', action: this.approveOrder.bind(this) },
  ];


  private poNotification = inject(PoNotificationService);
  private orderReviewService = inject(OrderReviewService);

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.isLoading = true;
    this.orderReviewService.fetchOrders().subscribe({
      next: (resp: any) => {
        this.items = resp.ListPedido;
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });
  }

  fetchOrdersById(idPedido: string) {
    this.orderId = idPedido;
    this.orderReviewService.fetchOrdersById(idPedido).subscribe({
      next: (resp: any) => {
        this.itemsDetails = resp.DetailPedido;
      }
    })
  }

  closeDetails() {
    this.orderId = null;
  }

  approveOrder() {
    this.orderReviewService.approveOrdersById(this.orderId).subscribe({
      next: (resp: any) => {
        this.getOrders();
        this.orderId = null;
        this.poNotification.success({ message: resp.message, duration: 3000 });
      }
    })
  }

  denyOrder() {
    this.orderReviewService.denyOrdersById(this.orderId).subscribe({
      next: (resp: any) => {
        this.getOrders();
        this.orderId = null;
        this.poNotification.information({ message: resp.message, duration: 3000 });
      }
    })
  }
}
