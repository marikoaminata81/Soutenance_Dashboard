import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionActivitePageRoutingModule } from './option-activite-routing.module';

import { OptionActivitePage } from './option-activite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionActivitePageRoutingModule
  ],
  declarations: [OptionActivitePage]
})
export class OptionActivitePageModule {}
