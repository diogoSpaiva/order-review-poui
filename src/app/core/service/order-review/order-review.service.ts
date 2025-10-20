import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class OrderReviewService {
  private readonly apiUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  fetchOrders(): Observable<OrderResponse> {
    return of(respListPedido);
    //return this.http.get<OrderResponse>(this.apiUrl);
  }

  fetchOrdersById(orderId: string): Observable<OrderDetailResponse> {
    // return this.http.get<OrderDetailResponse>(`${this.apiUrl}/${orderId}`);
    return of(respDetailPedido)
  }

  denyOrdersById(orderId: string): Observable<OrderResponse> {
    // return this.http.get<OrderResponse>(`${this.apiUrl}/${orderId}/deny`);
    return of(respDeny);
  }

  approveOrdersById(orderId: string): Observable<OrderResponse> {
    // return this.http.get<OrderResponse>(`${this.apiUrl}/${orderId}/approve`);
    return of(resAppprove);
  }
}


export interface Order {
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

export const respDeny: any =
  { message: "Pedido 435 negado com sucesso!" }

export const resAppprove: any =
  { message: "Pedido 435 aprovado com sucesso!" }

export const respDetailPedido: OrderDetailResponse = {
  DetailPedido: [
    {
      "item": "435",
      "descricao": "teste de descrição",
      "quantidade": 0,
      "vlUnitario": 0,
      "vlTotal": 0,
      "tabela": "01",
      "operacao": "01",
      "dtEntrega": "07/10/2025",
      "comissao": 0,
      "df": 0,
      "icms": 0,
      "pis": 0,
      "confins": 0,
      "rentabilidade": 0,
      "descontoTabela": 0
    }
  ]
}



export const respListPedido: OrderResponse = {
  ListPedido: [
    {
      "numero": "000457",
      "cliente": "000028",
      "emissao": "08/07/2013",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "10.000,00",
      "rentabilidade": "0,00",
      "idPedido": "435",
      "ultimoPedido": "000457",
      "ultimadtEntrega": "/  /",
      "ultimacondicaoPagamento": "001",
      "ultimototal": "10.000,00"
    },
    {
      "numero": "000827",
      "cliente": "000029",
      "emissao": "31/03/2015",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "008",
      "total": "110,00",
      "rentabilidade": "0,00",
      "idPedido": "801",
      "ultimoPedido": "000827",
      "ultimadtEntrega": "/  /",
      "ultimacondicaoPagamento": "008",
      "ultimototal": "110,00"
    },
    {
      "numero": "000987",
      "cliente": "002258",
      "emissao": "17/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "40,00",
      "rentabilidade": "0,00",
      "idPedido": "999",
      "ultimoPedido": "",
      "ultimadtEntrega": "",
      "ultimacondicaoPagamento": "",
      "ultimototal": "0"
    },
    {
      "numero": "000988",
      "cliente": "002259",
      "emissao": "21/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "20,00",
      "rentabilidade": "0,00",
      "idPedido": "1006",
      "ultimoPedido": "",
      "ultimadtEntrega": "",
      "ultimacondicaoPagamento": "",
      "ultimototal": "0"
    },
    {
      "numero": "000989",
      "cliente": "002260",
      "emissao": "18/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "40,00",
      "rentabilidade": "0,00",
      "idPedido": "1001",
      "ultimoPedido": "",
      "ultimadtEntrega": "",
      "ultimacondicaoPagamento": "",
      "ultimototal": "0"
    },
    {
      "numero": "000990",
      "cliente": "002199",
      "emissao": "05/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "2,00",
      "rentabilidade": "0,00",
      "idPedido": "954",
      "ultimoPedido": "000990",
      "ultimadtEntrega": "/  /",
      "ultimacondicaoPagamento": "001",
      "ultimototal": "2,00"
    },
    {
      "numero": "000991",
      "cliente": "002199",
      "emissao": "05/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "2,00",
      "rentabilidade": "0,00",
      "idPedido": "955",
      "ultimoPedido": "000991",
      "ultimadtEntrega": "/  /",
      "ultimacondicaoPagamento": "001",
      "ultimototal": "2,00"
    },
    {
      "numero": "000992",
      "cliente": "002199",
      "emissao": "05/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "2,00",
      "rentabilidade": "0,00",
      "idPedido": "956",
      "ultimoPedido": "000992",
      "ultimadtEntrega": "/  /",
      "ultimacondicaoPagamento": "001",
      "ultimototal": "2,00"
    },
    {
      "numero": "000993",
      "cliente": "002199",
      "emissao": "05/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "2,00",
      "rentabilidade": "0,00",
      "idPedido": "957",
      "ultimoPedido": "000993",
      "ultimadtEntrega": "/  /",
      "ultimacondicaoPagamento": "001",
      "ultimototal": "2,00"
    },
    {
      "numero": "000994",
      "cliente": "002200",
      "emissao": "06/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "2,00",
      "rentabilidade": "0,00",
      "idPedido": "958",
      "ultimoPedido": "",
      "ultimadtEntrega": "",
      "ultimacondicaoPagamento": "",
      "ultimototal": "0"
    },
    {
      "numero": "000996",
      "cliente": "002202",
      "emissao": "06/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "40,00",
      "rentabilidade": "0,00",
      "idPedido": "959",
      "ultimoPedido": "",
      "ultimadtEntrega": "",
      "ultimacondicaoPagamento": "",
      "ultimototal": "0"
    },
    {
      "numero": "000999",
      "cliente": "002205",
      "emissao": "08/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "40,00",
      "rentabilidade": "0,00",
      "idPedido": "960",
      "ultimoPedido": "",
      "ultimadtEntrega": "",
      "ultimacondicaoPagamento": "",
      "ultimototal": "0"
    },
    {
      "numero": "001000",
      "cliente": "002206",
      "emissao": "08/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "40,00",
      "rentabilidade": "0,00",
      "idPedido": "961",
      "ultimoPedido": "",
      "ultimadtEntrega": "",
      "ultimacondicaoPagamento": "",
      "ultimototal": "0"
    },
    {
      "numero": "001004",
      "cliente": "002210",
      "emissao": "08/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "40,00",
      "rentabilidade": "0,00",
      "idPedido": "963",
      "ultimoPedido": "",
      "ultimadtEntrega": "",
      "ultimacondicaoPagamento": "",
      "ultimototal": "0"
    },
    {
      "numero": "001005",
      "cliente": "002211",
      "emissao": "08/04/2016",
      "representante": "representante",
      "dtEntrega": "/  /",
      "condicaoPagamento": "001",
      "total": "40,00",
      "rentabilidade": "0,00",
      "idPedido": "964",
      "ultimoPedido": "",
      "ultimadtEntrega": "",
      "ultimacondicaoPagamento": "",
      "ultimototal": "0"
    }
  ],
  "totalCount": "28768",
  "pageNumber": "1",
  "pageSize": "15"
}
