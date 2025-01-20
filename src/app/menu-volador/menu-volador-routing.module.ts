import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuVoladorPage } from './menu-volador.page';

const routes: Routes = [
  {
    path: '',
    component: MenuVoladorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuVoladorPageRoutingModule {}
