import { NgModule } from '@angular/core';
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { DialogModule } from 'primeng/dialog';
import { DockModule } from 'primeng/dock';
import { ImageModule } from 'primeng/image';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { SpeedDialModule } from 'primeng/speeddial';


@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    DialogModule,
    DockModule,
    ImageModule,
    InputTextareaModule,
    TooltipModule,
    SpeedDialModule
  ]
})
export class PrimeNgModule { }
