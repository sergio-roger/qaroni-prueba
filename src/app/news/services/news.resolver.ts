import { ResolveFn } from '@angular/router';
import { NewsService } from './news/news.service';
import { Inject, inject } from '@angular/core';

export const newsResolver: ResolveFn<any> = (route, state) => {
  const newsService = inject(NewsService);
  return newsService.getMerchants();
};
