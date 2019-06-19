import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { FarmerComponent } from './farmer/farmer.component';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { FarmerService } from './shared/farmer.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FarmerComponent,
    FarmerListComponent
   // ImageCropperComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [FarmerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
