import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
 

import { MatMomentDateModule } from '@angular/material-moment-adapter';
 
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  NativeDateAdapter,
} from '@angular/material/core';


const DATE_FORMATS = {
  parse: {
    dateInput: 'dd.MM.yyyy',
  },
  display: {
    dateInput: 'dd.MM.yyyy',
    monthYearLabel: 'yyyy',
    dateA11yLabel: 'dd.MM.yyyy',
    monthYearA11yLabel: 'yyyy',
  },
};



class AppDateAdapter extends NativeDateAdapter {
  public constructor(matDateLocale: string) {
    super(matDateLocale);
  }

  public override format(date: Date, displayFormat: string): string {
    if (displayFormat === 'dd.MM.yyyy') {
      return date.toLocaleDateString('de-CH', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    } else {
      return date.getFullYear().toString();
    }
  }
}
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),provideHttpClient(),MatNativeDateModule ,MatMomentDateModule  , 
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }  ,
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
    {
      provide: DateAdapter,
      useClass: AppDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    
  ]
 
};
