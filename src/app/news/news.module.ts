import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '@shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [HomeComponent, CardNewsComponent, DetailComponent],
  imports: [CommonModule, NewsRoutingModule, SharedModule, MatCardModule],
})
export class NewsModule {}
