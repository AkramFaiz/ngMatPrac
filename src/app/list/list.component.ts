import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { tea } from '../Classes/tea';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list:[tea];
  constructor(private _data:DataService) { }

  ngOnInit() {
   this._data.getList(teaList => {
    this.list = teaList;
   })
  }

}
