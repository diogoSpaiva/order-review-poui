import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PoPageModule } from '@po-ui/ng-components';

import { ProtheusLibCoreModule, ProAppConfigService } from "@totvs/protheus-lib-core"

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoPageModule,
    ProtheusLibCoreModule,

    RouterOutlet,
  ],
  template: `
      <po-page-default>
        <router-outlet></router-outlet>
      </po-page-default>
    `,
})
export class AppComponent {
  constructor(private proAppConfigService: ProAppConfigService, private router: Router) {
    if (!this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
      sessionStorage.setItem("insideProtheus", "0");
      sessionStorage.setItem("ERPTOKEN", "");
    } else {
      sessionStorage.setItem("insideProtheus", "1");
    }
  }
}
