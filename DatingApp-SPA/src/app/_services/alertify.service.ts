import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(title: string, message: string, okCallback: () => any) {
    alertify.confirm(title, message, function(e) {
          if (e) {
            okCallback();
          } else {}
        }
    , function() {
      // empty for cancel
    });

  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  messsage(message: string) {
    alertify.message(message);
  }

}
