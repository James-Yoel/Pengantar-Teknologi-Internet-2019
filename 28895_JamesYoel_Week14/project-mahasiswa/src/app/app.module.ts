import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MahasiswaService } from './mahasiswa.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { PengurusListComponent } from './pengurus-list/pengurus-list.component';
import { KuliahListComponent } from './kuliah-list/kuliah-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MahasiswaListComponent,
    PengurusListComponent,
    KuliahListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MahasiswaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
