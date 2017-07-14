# Lokalizacija sa Devextreme Angular CLI


## Instalacija
Instalirati https://www.npmjs.com/package/devextreme-intl sa komandom
```Shell
npm install devextreme-intl -–save
```

## Uvezivanje na nivou app

U app.mopdule.ts importovati potrebne module i sa njima importovati poruke i setovati locale

```
//import it to change locale and load localization messages
import { locale, loadMessages } from 'devextreme/localization'; 

import { DevExtremeModule } from 'devextreme-angular';
import 'devextreme-intl';

import { AppComponent } from './app.component';

//Load localized messages (English included by default)
let  messages_bs_Latn_BA = require("assets/localization/bs-Latn-BA.json");
loadMessages(messages_bs_Latn_BA);

// Set locale according the browser language
// locale(navigator.language);
// or
// Set locale explicitly
locale('bs-Latn-BA');

```
Primjer app.module.ts : https://github.com/MirzaAbazovic/example-devextreme-intl/blob/master/src/app/app.module.ts

Napraviti poruke za zeljeni jezik u i snimiti ih u json file u assets npr.
assets/localization/bs-Latn-BA.json

Primjer bs-Latn-BA.json: https://github.com/MirzaAbazovic/example-devextreme-intl/blob/master/src/assets/localization/bs-Latn-BA.json


app.module.ts deklarise gdje mu se nalaze poruke sa linijom koda
```
let  messages_bs_Latn_BA = require("assets/localization/bs-Latn-BA.json");
```

a sa funkcijom locale postavlja lokale vezane za format decimale i datume
```
// Set locale according the browser language
locale(navigator.language);
// Set locale explicitly
locale('bs-Latn-BA');
```


### Napomena 

Chrome podrzava samo hr i sr lista na https://developer.chrome.com/webstore/i18n
dok IE podrzava i bs-Latn-BA


## Linkovi

* https://js.devexpress.com/Documentation/Guide/Widgets/Common/UI_Widgets/Localization/

* https://github.com/DevExpress/DevExtreme-Intl

* https://js.devexpress.com/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/


