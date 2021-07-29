import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { PengurusListComponent } from './pengurus-list/pengurus-list.component';
import { KuliahListComponent } from './kuliah-list/kuliah-list.component';

const routes: Routes = [
  { path: 'mahasiswa-list', component: MahasiswaListComponent },
  { path: 'pengurus-list', component: PengurusListComponent },
  { path: 'kuliah-list', component: KuliahListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
