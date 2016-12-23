import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  productUl: boolean = false;
  developersUl: boolean = false;
  companyUl: boolean = false;
  communityUl: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onProductClick() {
    this.productUl = !this.productUl;
  }
  onDevelopersClick() {
    this.developersUl = !this.developersUl;
  }
  onCompanyClick() {
    this.companyUl = !this.companyUl;
  }
  onCommunityClick() {
    this.communityUl = !this.communityUl;
  }

}
