import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeVideoPage } from './liste-video.page';

const routes: Routes = [
  {
    path: '',
    component: ListeVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeVideoPageRoutingModule {}
