import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { About } from './app/about/about';

bootstrapApplication(About, appConfig)
  .catch((err) => console.error(err));
