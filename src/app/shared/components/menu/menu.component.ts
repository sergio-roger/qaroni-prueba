import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '@services/menuData/menu-data.service';
import { MenuItem } from '@services/menuData/menuData.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public isMobile: boolean = false;
  public menus: Observable<MenuItem[]> = new Observable<MenuItem[]>();

  constructor(private menuService: MenuDataService) {}

  ngOnInit(): void {
    this.menus = this.menuService.menus;
  }

  openMobile(): void {
    this.isMobile = !this.isMobile;
  }
}
