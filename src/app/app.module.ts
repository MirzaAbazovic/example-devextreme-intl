import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import it to change locale and load localization messages
import { locale, loadMessages } from 'devextreme/localization'; 

import { DevExtremeModule } from 'devextreme-angular';
import 'devextreme-intl';

import { AppComponent } from './app.component';

//Load localized messages (English included by default)
// let messagesDe = require("devextreme/localization/messages/de.json");
// let  messagesJa = require("devextreme/localization/messages/ja.json");
// let  messagesRu = require("devextreme/localization/messages/ru.json");
let  messages_bs_Latn_BA = require("assets/localization/bs-Latn-BA.json");
// loadMessages(messagesRu);
// loadMessages(messagesDe);
// loadMessages(messagesJa);
loadMessages(messages_bs_Latn_BA);

// Set locale according the browser language
// locale(navigator.language);
console.log(navigator.language);
// Set locale explicitly
//locale('bs-Latn-BA');
locale('sr');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

