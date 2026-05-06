import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideGoogleAnalytics, provideGoogleAnalyticsRouter } from 'ngx-google-analytics';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    ...(environment.gaMeasurementId 
      ? [
          provideGoogleAnalytics(environment.gaMeasurementId),
          provideGoogleAnalyticsRouter()
        ] 
      : []
    )
  ]
};
