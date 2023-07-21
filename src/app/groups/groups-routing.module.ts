import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { groupResolver } from './services/group.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      data: groupResolver,
    },
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule {}
