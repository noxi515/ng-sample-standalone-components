import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// NgModuleのBootstrap
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// StandaloneのBootstrap
bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
  ]
})
  .catch(err => console.error(err));

