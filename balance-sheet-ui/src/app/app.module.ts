import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceSheetUiItemComponent } from './balance-sheet-ui/balance-sheet-ui-item/balance-sheet-ui-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceSheetUiItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
