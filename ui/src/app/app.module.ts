import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ServicesModule } from './shared/services/services.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ServicesModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
