import { Component, OnInit, Inject, Renderer2, ElementRef } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tnc';
  constructor( private renderer : Renderer2, @Inject(DOCUMENT) private document: any, private element : ElementRef) {}
  ngOnInit() {
    var navbarTop : HTMLElement = this.element.nativeElement.children[0].children[0];
    var navbar : HTMLElement = this.element.nativeElement.children[0].children[1];
    this.renderer.listen('window', 'scroll', (event) => {
        const number = window.scrollY;
        if (number > 100 || window.pageYOffset > 100) {
            // add logic
            navbarTop.classList.add('navbar-shrink');
            navbar.classList.add('navbar-shrink');
        } else {
            // remove logic
            navbarTop.classList.remove('navbar-shrink');
            navbar.classList.remove('navbar-shrink');
        }
      });
  }
}
