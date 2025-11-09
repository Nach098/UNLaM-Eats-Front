import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
<<<<<<< Updated upstream
import { authTokenInterceptor } from './core/interceptors/auth-token.interceptor';
=======
import { provideHttpClient } from '@angular/common/http'; // <-- 1. IMPORTAR
>>>>>>> Stashed changes

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
<<<<<<< Updated upstream
    provideHttpClient(withInterceptors([authTokenInterceptor]))
=======
    provideHttpClient() // <-- 2. AÑADIR
>>>>>>> Stashed changes
  ]
};
