import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { APP_INITIALIZER } from '@angular/core';



// angularfire
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormlyModule, FormlyFieldConfig,
  FORMLY_CONFIG } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FirebaseService } from './firebase.service';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    // Vex
    VexModule,
    CustomLayoutModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    FormlyModule.forRoot(
      ),
    ReactiveFormsModule,
    FormlyMaterialModule
  ],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: resourceProviderFactory,
  //     deps: [FirebaseService ],
  //     multi: true
  //   },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export function resourceProviderFactory(provider: FirebaseService) {
//   return () => provider.getFields();
// }
