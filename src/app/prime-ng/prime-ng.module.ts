import { NgModule } from '@angular/core';
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CaptchaModule } from 'primeng/captcha';
import { DialogModule } from 'primeng/dialog';
import { DockModule } from 'primeng/dock';
import { ImageModule } from 'primeng/image';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';


@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    CaptchaModule,
    CardModule,
    DialogModule,
    DockModule,
    ImageModule,
    InputTextareaModule,
    MenuModule,
    ProgressSpinnerModule,
    TabViewModule,
    TimelineModule,
    ToastModule,
    TooltipModule,
    SidebarModule,
    SpeedDialModule
  ]
})
export class PrimeNgModule { }
