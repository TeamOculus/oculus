import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  clickedMenu: boolean = false;
  clickedRift: boolean = false;
  clickedExperiences: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onClickMenu() {
    this.clickedMenu = !this.clickedMenu;
  }
  onClickRift() {
    this.clickedRift = !this.clickedRift;
  }
  onClickExperiences() {
    this.clickedExperiences = !this.clickedExperiences;
  }

}
