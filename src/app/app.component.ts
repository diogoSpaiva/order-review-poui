import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoPageModule,

    RouterOutlet,
  ],
  template: `
      <po-page-default>
        <router-outlet></router-outlet>
      </po-page-default>
    `,
})
export class AppComponent { }
