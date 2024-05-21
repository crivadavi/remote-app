import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ContainerRoutingModule } from './container-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CounterComponent } from './counter/counter.component';
import { OrdersComponent } from './orders/orders.component';
import { CommonComponentsModule } from '../common/common-components.module';

const commonComponents = [
  MainpageComponent,
  CounterComponent, 
  OrdersComponent
];

const commonModules = [
  CommonComponentsModule
];

@NgModule({
  declarations: [commonComponents],
  imports: [commonModules, ContainerRoutingModule],
  exports: [commonComponents, commonModules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerModule { }
