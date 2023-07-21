import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ShortWordPipe } from './pipes/shortWord/short-word.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchGroupPipe } from './pipes/searchGroup/search-group.pipe';
import { LogoutComponent } from './components/logout/logout.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MenuComponent,
    ShortWordPipe,
    LoadingComponent,
    SearchGroupPipe,
    LogoutComponent,
  ],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [
    MenuComponent,
    ShortWordPipe,
    LoadingComponent,
    SearchGroupPipe,
    LogoutComponent,
  ],
})
export class SharedModule {}
