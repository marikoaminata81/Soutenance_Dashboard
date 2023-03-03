import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeCommandesPage } from './liste-commandes.page';

const routes: Routes = [
  {
    path: '',
    component: ListeCommandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeCommandesPageRoutingModule {}
