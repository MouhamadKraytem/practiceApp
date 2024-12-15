import { Component, input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBodyComponent } from './app-body/app-body.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CommonModule, NgFor } from '@angular/common';
import { NavMap } from './models/nav-map';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, SideBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  navMenu: NavMap[] = [
    {
      mainNav: 'Alfa',
      subNav: ['6Gb', '10Gb', '20Gb'],
    },
    {
      mainNav: 'MTC',
      subNav: ['20Gb', '30Gb', '40Gb'],
    },
  ];
  mainSelected?: string;
  subSelected?: string;

  get mainNavMenu(): string[] {
    return this.navMenu.map((item) => item.mainNav);
  }

  get subNavMenu(): string[] {
    const selectedMainNav = this.navMenu.find(
      (item) => item.mainNav === this.mainSelected
    );
    return selectedMainNav ? selectedMainNav.subNav : [];
  }

  ngOnInit(): void {
    this.mainSelected = this.navMenu[0].mainNav;
    this.subSelected = this.navMenu[0].subNav[0];
  }

  selectMain(selected:string) {
    this.mainSelected = selected;
  }

  
  selectMainNav(selected: string): void {
    if (this.mainSelected !== selected) {
      this.mainSelected = selected;
      this.subSelected = this.subNavMenu[0];
    }
  }
  selectSub(selected:string) {
    this.subSelected = selected;
  }


}
