import { HttpErrorResponse } from '@angular/common/http';
import {UserNotificationService} from "../user-notification/user-notification.service";
import {errorMsgByErrorId} from "./error-message.constant";

export function showErrorMsgToUser(error: HttpErrorResponse, userNotificationService: UserNotificationService) {
  const errorMessage = error?.error?.errorId
    ? errorMsgByErrorId(error?.error?.errorId, error?.error?.additionalInfo)
    : error?.error?.message ?? 'error notification|server error:Server-Fehler: Keine Antwort';
  if (errorMessage) {
    userNotificationService.errorMsg(errorMessage);
  }
  console.error('Unexpected Error: ', error);
}
