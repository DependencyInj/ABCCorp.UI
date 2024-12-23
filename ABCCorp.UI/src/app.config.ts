
  import {
    IPublicClientApplication,
    PublicClientApplication,
    InteractionType,
    BrowserCacheLocation,
    LogLevel,
  } from '@azure/msal-browser';
  import {
    MsalInterceptorConfiguration,
    MsalGuardConfiguration,
  } from '@azure/msal-angular';
import { environment } from './environments/environment';
  
  export function loggerCallback(logLevel: LogLevel, message: string) {
    console.log(message);
  }
  
  export function MSALInstanceFactory(): IPublicClientApplication {
    return new PublicClientApplication({
      auth: {
        clientId: environment.adConfig.clientId,
        authority: `https://login.microsoftonline.com/${environment.adConfig.tenantId}`, //environment.msalConfig.auth.authority,
        knownAuthorities: ['login.microsoftonline.com'], // Mark your B2C tenant's domain as trusted.
        redirectUri: '/',
        postLogoutRedirectUri: '/',
      },
      cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
      },
      system: {
        allowNativeBroker: false, // Disables WAM Broker
        loggerOptions: {
          loggerCallback,
          logLevel: LogLevel.Info,
          piiLoggingEnabled: false,
        },
      },
    });
  }
  
  export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
    const protectedResourceMap = new Map<string, Array<string>>();
    //have this set if more microservice used or requires different scope for different controllers
    protectedResourceMap.set(
      environment.adConfig.apiEndpointUrl, // This is for all controllers
      environment.adConfig.scopeUrls
    );
  
    return {
      interactionType: InteractionType.Redirect,
      protectedResourceMap,
    };
  }
  
  export function MSALGuardConfigFactory(): MsalGuardConfiguration {
    return {
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: [...environment.adConfig.scopeUrls],
      },
      loginFailedRoute: '/login-failed',
    };
  }
