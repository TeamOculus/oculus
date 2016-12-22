import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoClicked: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onVideoClick() {
    this.videoClicked = !this.videoClicked;
  }

}
