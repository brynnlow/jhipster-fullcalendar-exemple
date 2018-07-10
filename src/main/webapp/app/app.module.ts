import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
    JhiMainComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
    ],
    providers: [],
    bootstrap: [ JhiMainComponent ]
})
export class FullcalendarExempleAppModule {}
