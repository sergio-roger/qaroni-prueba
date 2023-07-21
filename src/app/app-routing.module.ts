import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '@auth/guard/auth/auth.guard';
import { sesionGuard } from '@auth/guard/sesion/sesion.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [sesionGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'groups',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./groups/groups.module').then((m) => m.GroupsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
