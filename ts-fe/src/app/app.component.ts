import {Component, OnInit} from '@angular/core';
import {IconService} from './shared/services/icon.service';
import {CUSTOM_ICONS} from './shared/model/common.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'ts-fe';

  constructor(private iconService: IconService) {
  }
  ngOnInit(): void {
    this.iconService.registerIcons(CUSTOM_ICONS);
  }
}
