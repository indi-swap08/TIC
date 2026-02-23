import { Component, OnInit } from '@angular/core';
import { IconService } from './shared/services/icon.service';
import { CUSTOM_ICONS } from './shared/model/common.model';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ts-fe';
  isDarkMode = false;

  constructor(
    private iconService: IconService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.iconService.registerIcons(CUSTOM_ICONS);
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
