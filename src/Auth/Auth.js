import * as msal from "@azure/msal-browser";
import { loginRequest, msalConfig } from "./AuthConfig";

export default class Auth {
  constructor(history) {
    this.history = history;
    this.msal = new msal.PublicClientApplication(msalConfig);
  }

  login = () => {
    this.msal.loginRedirect({ loginRequest });
  };

  async handleRedirectPromise() {
    await this.msal
      .handleRedirectPromise()
      .then((response) =>
        console.info("this is the callback resposne: " + response)
      );

    this.history.push("/home");
  }

  async getAccessToken(requestScope) {
    await this.handleRedirectPromise();

    const accessTokenRequest = {
      scopes: requestScope,
      account: this.msal.getAllAccounts()[0],
      redirectUri: `${window.location.origin}/callback`,
    };

    const response = await this.msal.acquireTokenSilent(accessTokenRequest);
    return response.accessToken;
  }

  isAuthenticated() {
    return this.msal.getAllAccounts() == null ? false : true;
  }

  user() {
    return this.msal.getAllAccounts()[0];
  }

  logout() {}
}
