import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private renderer: Renderer2;
    private isDarkMode = new BehaviorSubject<boolean>(false);
    isDarkMode$ = this.isDarkMode.asObservable();

    constructor(
        rendererFactory: RendererFactory2,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
        if (typeof localStorage !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                this.setDarkMode(true);
            }
        }
    }

    toggleTheme() {
        this.setDarkMode(!this.isDarkMode.value);
    }

    setDarkMode(isDark: boolean) {
        this.isDarkMode.next(isDark);
        const host = this.document.body;
        if (isDark) {
            this.renderer.addClass(host, 'dark-theme');
            this.renderer.removeClass(host, 'light-theme');
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('theme', 'dark');
            }
        } else {
            this.renderer.addClass(host, 'light-theme');
            this.renderer.removeClass(host, 'dark-theme');
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('theme', 'light');
            }
        }
    }
}
