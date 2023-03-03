import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionUtilisateurPageRoutingModule } from './option-utilisateur-routing.module';

import { OptionUtilisateurPage } from './option-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionUtilisateurPageRoutingModule
  ],
  declarations: [OptionUtilisateurPage]
})
export class OptionUtilisateurPageModule {}
