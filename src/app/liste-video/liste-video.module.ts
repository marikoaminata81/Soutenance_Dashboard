import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeVideoPageRoutingModule } from './liste-video-routing.module';

import { ListeVideoPage } from './liste-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeVideoPageRoutingModule
  ],
  declarations: [ListeVideoPage]
})
export class ListeVideoPageModule {}
