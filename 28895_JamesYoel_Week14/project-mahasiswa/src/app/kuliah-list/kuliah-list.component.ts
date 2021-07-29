import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from '../mahasiswa.service';

@Component({
  selector: 'app-kuliah-list',
  templateUrl: './kuliah-list.component.html',
  styleUrls: ['./kuliah-list.component.css']
})
export class KuliahListComponent implements OnInit {

  public mhs = [];

  constructor(private mhsService: MahasiswaService) { }

  ngOnInit() {
  	this.mhs = this.mhsService.getKuliah()
  }

}
