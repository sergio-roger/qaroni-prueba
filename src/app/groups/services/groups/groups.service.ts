import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GroupsResponse, Result } from './group.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private url: string = '';
  private _groupsResponse: BehaviorSubject<GroupsResponse | null> =
    new BehaviorSubject<GroupsResponse | null>(null);
  private _groups: BehaviorSubject<Result[]> = new BehaviorSubject<Result[]>(
    []
  );

  get groupRespone(): Observable<GroupsResponse | null> {
    return this._groupsResponse.asObservable();
  }

  get groups(): Observable<Result[]> {
    return this._groups.asObservable();
  }

  constructor(private http: HttpClient) {
    this.url = environment.API;
  }

  getGroups(): Observable<GroupsResponse> {
    const endpoint: string = this.url + '/merchants/71/groups';
    return this.http.get<GroupsResponse>(endpoint).pipe(
      tap((res) => {
        this._groupsResponse.next(res);

        if (res && res.result && res.result.length > 0)
          this._groups.next(res.result);
        else this._groups.next([]);
      })
    );
  }

  detailt(id: string): Observable<GroupsResponse> {
    const endpoint: string = `${this.url}/merchants/71/groups/${id}`;
    return this.http.get<GroupsResponse>(endpoint);
  }
}
