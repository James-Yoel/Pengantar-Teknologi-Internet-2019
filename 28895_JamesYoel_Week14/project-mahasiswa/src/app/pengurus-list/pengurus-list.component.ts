import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from '../mahasiswa.service';

@Component({
  selector: 'app-pengurus-list',
  templateUrl: './pengurus-list.component.html',
  styleUrls: ['./pengurus-list.component.css']
})
export class PengurusListComponent implements OnInit {

  public mhs = [];

  constructor(private mhsService: MahasiswaService) { }

  ngOnInit() {
  	this.mhs = this.mhsService.getEmployees();
  }

}
