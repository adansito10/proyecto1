import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuVoladorPageRoutingModule } from './menu-volador-routing.module';

import { MenuVoladorPage } from './menu-volador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuVoladorPageRoutingModule
  ],
  declarations: [MenuVoladorPage]
})
export class MenuVoladorPageModule {}
