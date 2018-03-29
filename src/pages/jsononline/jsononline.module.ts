import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JsononlinePage } from './jsononline';

@NgModule({
  declarations: [
    JsononlinePage,
  ],
  imports: [
    IonicPageModule.forChild(JsononlinePage),
  ],
})
export class JsononlinePageModule {}
