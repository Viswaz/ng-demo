import { Injectable } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable()
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-252708.oktapreview.com',
      clientId: '0oae358nrc2LnjpHy0h7   ',
      redirectUri: 'http://localhost:4200',
      authParams: {
        issuer: 'default'
      }
    });
  }

  getWidget() {
    return this.widget;
  }
}