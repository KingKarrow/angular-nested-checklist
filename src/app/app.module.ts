import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatNestedChecklistModule } from './modules/nested-checklist/mat-nested-checklist.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatNestedChecklistModule
  ],
  exports: [

  ],
  providers: [
    importProvidersFrom(HttpClientModule)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
