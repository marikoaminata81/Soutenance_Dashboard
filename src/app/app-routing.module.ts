import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: 'utilisateurs',
    loadChildren: () => import('./utilisateurs/utilisateurs.module').then( m => m.UtilisateursPageModule)
  },  {
    path: 'activite',
    loadChildren: () => import('./activite/activite.module').then( m => m.ActivitePageModule)
  },
  {
    path: 'ajout-user',
    loadChildren: () => import('./ajout-user/ajout-user.module').then( m => m.AjoutUserPageModule)
  },
  {
    path: 'detail-produit',
    loadChildren: () => import('./detail-produit/detail-produit.module').then( m => m.DetailProduitPageModule)
  },
  {
    path: 'option-utilisateur',
    loadChildren: () => import('./option-utilisateur/option-utilisateur.module').then( m => m.OptionUtilisateurPageModule)
  },
  {
    path: 'option-activite',
    loadChildren: () => import('./option-activite/option-activite.module').then( m => m.OptionActivitePageModule)
  },
  {
    path: 'liste-video',
    loadChildren: () => import('./liste-video/liste-video.module').then( m => m.ListeVideoPageModule)
  },
  {
    path: 'liste-commandes',
    loadChildren: () => import('./liste-commandes/liste-commandes.module').then( m => m.ListeCommandesPageModule)
  },
  {
    path: 'liste-user',
    loadChildren: () => import('./liste-user/liste-user.module').then( m => m.ListeUserPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
