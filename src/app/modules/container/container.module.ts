import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CounterComponent } from './counter/counter.component';
import { OrdersComponent } from './orders/orders.component';

const commonComponents = [
  MainpageComponent,
  CounterComponent, 
  OrdersComponent
];

@NgModule({
  declarations: [commonComponents],
  imports: [CommonModule, ContainerRoutingModule],
  exports: [commonComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerModule { }
