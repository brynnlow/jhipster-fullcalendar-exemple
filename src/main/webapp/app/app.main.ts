import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FullcalendarExempleAppModule } from './app.module';

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(FullcalendarExempleAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
