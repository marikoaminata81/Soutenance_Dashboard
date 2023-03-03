import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionUtilisateurPage } from './option-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: OptionUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionUtilisateurPageRoutingModule {}
