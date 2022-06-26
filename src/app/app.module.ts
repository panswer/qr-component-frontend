import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { QrComponentComponent } from './components/organisms/qr-component/qr-component.component';
import { QrImageComponent } from './components/atoms/qr-image/qr-image.component';
import { QrInfoComponent } from './components/molecules/qr-info/qr-info.component';
import { QrTitleComponent } from './components/atoms/qr-title/qr-title.component';
import { QrDescriptionComponent } from './components/atoms/qr-description/qr-description.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    QrComponentComponent,
    QrImageComponent,
    QrInfoComponent,
    QrTitleComponent,
    QrDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
