import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class OrderReviewService {
  private readonly apiUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  fetchOrders(): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(this.apiUrl);
  }

  fetchOrdersById(orderId: string): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${this.apiUrl}/${orderId}`);
  }

  denyOrdersById(orderId: string): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${this.apiUrl}/${orderId}/deny`);
  }

  approveOrdersById(orderId: string): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${this.apiUrl}/${orderId}/approve`);
  }
}


export interface Order {
  filial: string;
  numero: string;
  cliente: string;
  emissao: string;
  representante: string;
  dtEntrega: string;
  condicaoPagamento: string;
  total: string;
  rentabilidade: string;
  idPedido: string;
  ultimoPedido: string;
  ultimadtEntrega: string;
  ultimacondicaoPagamento: string;
  ultimototal: string;
}

export interface OrderResponse {
  ListPedido: Order[];
  totalCount: string;
  pageNumber: string;
  pageSize: string;
}

export interface OrderDetail {
  item: string;
  descricao: string;
  quantidade: number;
  vlUnitario: number;
  vlTotal: number;
  tabela: string;
  operacao: string;
  dtEntrega: string;
  comissao: number;
  df: number;
  icms: number;
  pis: number;
  confins: number;
  rentabilidade: number;
  descontoTabela: number;
}

export interface OrderDetailResponse {
  DetailPedido: OrderDetail[];
}