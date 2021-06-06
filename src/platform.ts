import { Type } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

const bootstrapModule = (AppModule: Type<unknown>) => {

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

};

export default bootstrapModule;