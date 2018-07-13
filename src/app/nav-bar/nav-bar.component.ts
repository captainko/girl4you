import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private smooth: SimpleSmoothScrollService) { }
  goTop(){
    this.smooth.smoothScrollToTop(new SimpleSmoothScrollOption(1000, 'linear'));
  }
  ngOnInit() {
    this.smooth.smoothScrollToAnchor();

    // toggle class scroll
    var lastScrollTop, st = 0;
    $('.navbar-trans').removeClass('fixed-top bg-dark');
    $('.navbar-trans').addClass('bg-dark');
    $(window).scroll(function() {
      st = $(this).scrollTop();
      if (st != 0) {
        $('.navbar-trans').addClass('fixed-top');
        $('.navbar-trans').removeClass('bg-dark');
      }
      else {
        $('.navbar-trans').removeClass('fixed-top bg-dark');
        $('.navbar-trans').addClass('bg-dark');
      }
      if (st > 50) {
        $('.navbar-trans').addClass('afterscroll');
      } else {
        $('.navbar-trans').removeClass('afterscroll');
      }
      if (st < lastScrollTop) {
        $('.navbar-trans').removeClass('afterscroll');
      }
      lastScrollTop = st;
    });


    // demo only
    // open link in new tab without ugly target="_blank"

  }

}
