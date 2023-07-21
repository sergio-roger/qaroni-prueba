import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Result, newsResponse } from './news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private url: string = '';
  private _merchantResponse: BehaviorSubject<newsResponse | null> =
    new BehaviorSubject<newsResponse | null>(null);
  private _merchants: BehaviorSubject<Result[]> = new BehaviorSubject<Result[]>(
    []
  );

  get merchantResponse(): Observable<newsResponse | null> {
    return this._merchantResponse.asObservable();
  }

  get merchants(): Observable<Result[]> {
    return this._merchants.asObservable();
  }

  constructor(private http: HttpClient) {
    this.url = environment.API;
  }

  getMerchants() {
    const endpoint: string = this.url + '/merchants/71/news';
    return this.http.get<newsResponse>(endpoint).pipe(
      tap((res) => {
        this._merchantResponse.next(res);

        if (res && res.result && res.result.length > 0) {
          this._merchants.next(res.result);
        } else this._merchants.next([]);
      })
    );
  }

  detail(id: string) {
    const endpoint: string = `${this.url}/merchants/71/news/${id}`;
    return this.http.get<newsResponse>(endpoint);
  }
}
