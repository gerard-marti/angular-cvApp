import { NgModule } from '@angular/core';
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CaptchaModule } from 'primeng/captcha';
import { DialogModule } from 'primeng/dialog';
import { DockModule } from 'primeng/dock';
import { ImageModule } from 'primeng/image';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { SpeedDialModule } from 'primeng/speeddial';


@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    CaptchaModule,
    DialogModule,
    DockModule,
    ImageModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    ToastModule,
    TooltipModule,
    SpeedDialModule
  ]
})
export class PrimeNgModule { }
