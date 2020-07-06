// This file contains all the parameters for MSAL 2.0 to work.
// The application should run with just adding the clientid (app guid) of a previously registered application on AAD and your tenant id (tenant guid).
// You also must register http://localhost:3000/callback on your app registration redirect URLs.

const msalConfig = {
  auth: {
    // Your application client ID from Azure AD App Registration
    clientId: "<yourclientid>",
    // Append your Azure AD tenant to https://login.microsoftonline.com
    authority: "https://login.microsoftonline.com/<yourtenantid>",
    // Url where the user will be redirected after login
    redirectUri: `${window.location.origin}/callback`,
    // Set this to false to prevent auto redirect after callback to originator url by msal.
    // Default value is true which causes a race condition between handleCallback and this navigation.
    // As a result I got an infinite loop and figured out that with this set to false I can managed the callback nicely
    navigateToLoginRequestUrl: false,
  },
  cache: {
    // This configures where your cache will be stored
    cacheLocation: "sessionStorage",
    // Set this to "true" if you are having issues on IE11 or Edge
    storeAuthStateInCookie: false,
  },
};

// scopes for the login request
const loginRequest = {
  scopes: ["openid", "profile", "User.Read"],
};

// scopes to request an authorization bearer token to the Microsoft Graph API after authentication
const tokenRequestForGraphApi = ["User.Read"];

export { loginRequest, tokenRequestForGraphApi, msalConfig };
