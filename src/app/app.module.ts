import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkSheetComponent } from './work-sheet/work-sheet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsultantsService } from './services/consultants/consultants.service';
import { ConsultantsFakeService } from './services/consultants/consultants-fake.service';

@NgModule({
  declarations: [
    AppComponent,
    WorkSheetComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [ { provide: ConsultantsService, useClass: ConsultantsFakeService } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
