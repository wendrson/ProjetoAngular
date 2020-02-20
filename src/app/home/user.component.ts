import { RepositoryService } from '../repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';

export interface PeriodicElement {

name: string;
position: number;
age: number;
symbol: string;
details: any;
update: any;
delete: any;
}

const ELEMENT_DATA: PeriodicElement [] = [
    { position: 1, name: 'Danearys', age: 21, symbol: 'H', details: '', update: '', delete: ''},
    { position: 2, name: 'Jhon Snow Boy Lixo', age: 23, symbol: 'I', details: '', update: '', delete: '' },
    { position: 3, name: 'Maria', age: 19, symbol: 'H', details: '', update: '', delete: '' },
    { position: 4, name: 'Bjork', age: 51, symbol: 'H', details: '', update: '', delete: '' },
    { position: 5, name: 'Adam', age: 21, symbol: 'H', details: '', update: '', delete: '' },
    { position: 6, name: 'Yennifer', age: 19, symbol: 'H', details: '', update: '', delete: '' },
    { position: 7, name: 'Geraldão', age: 30, symbol: 'H', details: '', update: '', delete: '' },
    { position: 8, name: 'Yasker', age: 29, symbol: 'H', details: '', update: '', delete: '' },
    { position: 9, name: 'Dr.', age: 25, symbol: 'H', details: '', update: '', delete: '' },
    { position: 10, name: 'Sister Ninght', age: 22, symbol: 'H', details: '', update: '', delete: '' },
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  displayedColumns: string [] = [ 'position', 'name', 'age', 'symbol', 'details', 'update', 'delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  constructor( private repoService: RepositoryService ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
