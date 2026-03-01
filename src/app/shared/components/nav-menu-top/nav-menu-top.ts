import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { SpeedDialModule } from 'primeng/speeddial';


@Component({
  selector: 'app-nav-menu-top',
  imports: [
    MenubarModule,
    SpeedDialModule
  ],
  templateUrl: './nav-menu-top.html',
  styleUrl: './nav-menu-top.css',
})
export class NavMenuTop {
  items: MenuItem[] = [
    {
      label: 'Colaboradores',
      icon: PrimeIcons.USERS,
      items: [
        {
          label: 'Adicionar',
          routerLink: '/app/collabs/new',
          icon: PrimeIcons.PLUS
        },
        {
          label: 'Todos',
          routerLink: '/app/collabs',
          icon: PrimeIcons.EYE
        },
      ]
    },
  ]
    profileItem: MenuItem[] = [
      {
        icon: 'pi pi-sign-out',
      }
    ]
}
