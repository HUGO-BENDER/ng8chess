// --Modules in @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// -- App components
import { AppRoutingModule } from './components/app-routing/app-routing.module';
import { AppComponent } from './app.component';

// --Material
import { AppMaterialModule } from './components/app-material/app-material.module';

// --Translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// --SweetAlert2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppToolBarComponent } from './components/app-tool-bar/app-tool-bar.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageAboutComponent } from './components/page-about/page-about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PagePolicyPrivacyComponent } from './components/page-policy-privacy/page-policy-privacy.component';
import { PagePolicyServiceComponent } from './components/page-policy-service/page-policy-service.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AppToolBarComponent,
    AppFooterComponent,
    AppLoginComponent,
    PageHomeComponent,
    PageAboutComponent,
    PageNotFoundComponent,
    PagePolicyPrivacyComponent,
    PagePolicyServiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      confirmButtonClass: 'mat-raised-button mat-primary',
      cancelButtonClass: 'mat-raised-button swal-margin-rigth',
      reverseButtons: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
