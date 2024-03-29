import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailService } from './services/email-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,
    ReactiveFormsModule],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
