import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlankTemplateComponent } from "./template/blank-template.component";
import { LeftNavTemplateComponent } from "./template/left-nav-template.component";
import { AppRoutingModule, routes } from "./app.routing";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { ToastrModule } from "ngx-toastr";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { HttpErrorHandlerService } from "./core/services/http-error-handler.service";
import { PreloadingstrategyService } from "./core/misc/preloadingstrategy.service";
import { DataSharingService } from "./core/services/shared/data.sharing.service";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LeftNavTemplateComponent,
    NavigationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ExcelExportModule,
    BrowserAnimationsModule,
    GridModule,
     //ChartsModule,
     HttpClientModule,
     HttpClientJsonpModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })

    
  ],
  providers: [  PreloadingstrategyService, HttpErrorHandlerService, DatePipe,DataSharingService ],
  bootstrap: [AppComponent],
  schemas: [
    // Kendo UI Related Issue
       CUSTOM_ELEMENTS_SCHEMA,
       NO_ERRORS_SCHEMA
     ]
})
export class AppModule {}
