import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageService } from './image/shared/image.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
