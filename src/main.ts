import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
<<<<<<< HEAD
  .catch(err => console.log(err));
=======
  .catch(err => console.error(err));
>>>>>>> 75e067ca023a3c73cabf48759631afaddbbbb9de
