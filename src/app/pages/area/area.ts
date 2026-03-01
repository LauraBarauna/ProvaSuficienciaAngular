import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NavMenuTop } from "../../shared/components/nav-menu-top/nav-menu-top";

@Component({
  selector: 'app-area',
  imports: [RouterOutlet, NavMenuTop],
  templateUrl: './area.html',
  styleUrl: './area.css',
})
export class Area {

}
