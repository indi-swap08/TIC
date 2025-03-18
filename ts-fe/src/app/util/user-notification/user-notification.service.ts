import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UserNotificationService {
  constructor(private snackBar: MatSnackBar) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  readonly defaultConfig: MatSnackBarConfig = {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
  };

  successMsg(userMessage: string = '', duration = 5000) {
    this.snackBar.open(userMessage, '', {
      ...this.defaultConfig,
      duration: duration,
      panelClass: ['hs-successful'],
    });
  }

  errorMsg(userMessage: string = '', duration = 5000) {
    this.snackBar.open(userMessage, '', {
      ...this.defaultConfig,
      duration: duration,
      panelClass: ['hs-warn'],
    });
  }

  showMsg(userMessage: string = '', duration = 5000) {
    this.snackBar.open(userMessage, '', {
      ...this.defaultConfig,
      duration: duration,
      panelClass: ['hs-normal'],
    });
  }
}
