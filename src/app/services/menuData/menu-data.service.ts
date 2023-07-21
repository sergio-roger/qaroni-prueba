import { Injectable } from '@angular/core';
import { MenuItem } from './menuData.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuDataService {
  private menuItems: MenuItem[] = [
    { label: 'Inicio', link: '/' },
    { label: 'Grupos', link: '/groups' },
    { label: 'Login', link: '/auth/login' },
    { label: 'Registro', link: '/auth/register' },
  ];

  private _menus: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>(
    []
  );

  get menus() {
    this._menus.next(this.menuItems);
    return this._menus.asObservable();
  }

  constructor() {}
}
