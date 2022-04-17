import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Blog } from '../blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  displayedColumns = ['title', 'createdDate', 'author'];
  tableSource = new MatTableDataSource<Blog>();
  filterText = "";

  ELEMENT_DATA: Blog[] = [
    {id: 'arst', title: 'arst', author: 'arst', createdDate: new Date(Date.now()), modifiedDate: new Date(Date.now())},
    {id: 'arst', title: 'Helium', author: 'arst', createdDate: new Date(Date.now()), modifiedDate: new Date(Date.now())},
    {id: 'arst', title: 'Lithium', author: 'arst', createdDate: new Date(Date.now()), modifiedDate: new Date(Date.now())},
    {id: 'arst', title: 'Beryllium', author: 'arst', createdDate: new Date(Date.now()), modifiedDate: new Date(Date.now())},
    {id: 'arst', title: 'Boron', author: 'arst', createdDate: new Date(Date.now()), modifiedDate: new Date(Date.now())},
    {id: 'arst', title: 'Carbon', author: 'arst', createdDate: new Date(Date.now()), modifiedDate: new Date(Date.now())},
    {id: 'arst', title: 'Nitrogen', author: 'arst', createdDate: new Date(Date.now()), modifiedDate: new Date(Date.now())},
    {id: 'arst', title: 'Oxygen', author: 'arst', createdDate: new Date(Date.now()), modifiedDate: new Date(Date.now())},
    {id: 'arst', title: 'Fluorine', author: 'arst', createdDate: new Date(Date.now()), modifiedDate: new Date(Date.now())},
    {id: 'arst', title: 'Neon', author: 'arst', createdDate: new Date(Date.now()), modifiedDate: new Date(Date.now())},
  ];

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  constructor() { }

  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit() {
    this.tableSource.sort = this.sort!;
    this.tableSource.paginator = this.paginator!;
  }

  getData() {
    this.tableSource.data = this.ELEMENT_DATA;
  }

  filter(value: string) {
    console.log(value)
    this.tableSource.filter = value.trim().toLocaleLowerCase();
  }

}
