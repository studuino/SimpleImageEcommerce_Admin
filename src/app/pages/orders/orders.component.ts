import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  dataTable: any;

  constructor() { }

  ngOnInit() {
    const table: any = $('table');
    this.dataTable = table.DataTable();
  }

}
