import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionActivitePage } from './option-activite.page';

const routes: Routes = [
  {
    path: '',
    component: OptionActivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionActivitePageRoutingModule {}
