import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app/app.component';
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
  ]
})
  .catch(err => console.error(err));

