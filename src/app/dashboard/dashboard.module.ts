import { NgModule } from '@angular/core';

import { DashboardCardComponent } from './shared/dashboard-card/dashboard-card.component';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [DashboardRoutingModule, SharedModule],
  declarations: [DashboardCardComponent, routedComponents]
})
export class DashboardModule { }
