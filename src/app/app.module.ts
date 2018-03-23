import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';

// import { MenuSideBarComponent } from '../menu-side-bar/menu-side-bar.component';
import { ContainerComponent } from './container/container.component';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';
import { HeaderComponent } from './container/header/header.component';
import { MenuControlsComponent } from './container/menu-controls/menu-controls.component';
import { FileComponent } from './file/file.component';
import { ContentComponent } from './container/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuSideBarComponent,
    ContainerComponent,
    HeaderComponent,
    MenuControlsComponent,
    FileComponent,
    ContentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
