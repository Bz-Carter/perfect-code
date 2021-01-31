import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let $, $toggle, materialKit,div: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
  location: any;
  routerSubscription: any;

  constructor(private router: Router) {
  }

  ngOnInit(){

    
      
      this.recallJsFuntions();
  }

  recallJsFuntions() {
      this.router.events
      .subscribe((event) => {
          if ( event instanceof NavigationStart ) {
            $('html').removeClass('nav-open');
          }
      });
      this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
          $.getScript('/assets/js/material-kit.js');
          


          $(document).on('click', '.navbar-toggler', function() {
            $toggle = $(this), 1 == materialKit.misc.navbar_menu_visible ? ($('html').removeClass('nav-open'), materialKit.misc.navbar_menu_visible = 0, $('#bodyClick').remove(), setTimeout(function() {
                $toggle.removeClass('toggled')
            }, 550), $('html').removeClass('nav-open-absolute')) : (setTimeout(function() {
                $toggle.addClass('toggled')
            }, 580), div = '<div id="bodyClick"></div>', $(div).appendTo('body').click(function() {
                $('html').removeClass('nav-open'), $('nav').hasClass('navbar-absolute') && $('html').removeClass('nav-open-absolute'), materialKit.misc.navbar_menu_visible = 0, $('#bodyClick').remove(), setTimeout(function() {
                    $toggle.removeClass('toggled')
                }, 550)
            }), $('nav').hasClass('navbar-absolute') && $('html').addClass('nav-open-absolute'), $('html').addClass('nav-open'), materialKit.misc.navbar_menu_visible = 1)
        })
          

          this.location = this.router.url;
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }
}


