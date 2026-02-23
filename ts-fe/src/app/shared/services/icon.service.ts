import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private readonly ICONS_FOLDER_PATH = 'assets/icons/svg';

  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}

  public registerIcons(icons: string[]) {
    this.loadIcons(icons, this.ICONS_FOLDER_PATH);
  }

  private loadIcons(icons: string[], folderPath: string) {
    icons.forEach((icon) => {
      this.iconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`${folderPath}/${icon}.svg`));
    });
  }
}
