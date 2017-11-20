import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
// import { UniversalInterceptor } from './services/universal.interceptor.service';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule
  ],
  // providers: [{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: UniversalInterceptor,
  //   /* Multi is important or you will delete all the other interceptors */
  //   multi: true
  // }],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule {}
