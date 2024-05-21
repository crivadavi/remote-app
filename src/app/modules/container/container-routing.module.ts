import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CounterComponent } from './counter/counter.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: MainpageComponent,
  //   pathMatch: "full"
  // },
  // { path: '', redirectTo: '/counterApp', pathMatch: 'full' },
  { 
    path: '', 
    component: MainpageComponent,
    children: [
      { 
        path: '', 
        component: CounterComponent 
      },
      { 
        path: 'prova', 
        component: OrdersComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
