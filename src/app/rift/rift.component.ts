import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-rift',
  templateUrl: './rift.component.html',
  styleUrls: ['./rift.component.scss']
})
export class RiftComponent implements OnInit {
  constructor() { }
    
  ngOnInit() {
    document.addEventListener("mousemove", (event) => {
      // console.log(event.clientX)
      const w = window.innerWidth;
      const x = event.clientX;
      // console.log(x / w * 30 - 15);
      document.querySelector(".section4-div8-hand").style.transform=`translate3d(-38.6875px, 0px, 0px) rotate(${x /w * 30 -15}deg)`;
      document.querySelector(".section4-div12-wireframe").style.transform=`translate3d(-38.6875px, 0px, 0px) rotate(${x /w * 30 -15}deg)`;
    })
    jQuery(".section1-content-div").slideUp("slow", function() {
      ;
    })
    jQuery(".section1-content-h3").slideUp("slow", function() {

    })
    var owl = jQuery('.owl-carousel');
    owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    autoplaySpeed:2000,
    
});

}
}