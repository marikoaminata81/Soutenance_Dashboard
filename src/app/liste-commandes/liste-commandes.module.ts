import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeCommandesPageRoutingModule } from './liste-commandes-routing.module';

import { ListeCommandesPage } from './liste-commandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeCommandesPageRoutingModule
  ],
  declarations: [ListeCommandesPage]
})
export class ListeCommandesPageModule {}
