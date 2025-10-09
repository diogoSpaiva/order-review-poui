import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/order-review/order-review.component').then(c => c.OrderReviewComponent),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
