import { Component, DoCheck, OnInit } from '@angular/core';
import { EmployeeData, EmployeesService } from './employees.service';
import { Names } from './mock-data';

import { Rnd } from './data/rnd-70-27-30';
import { Sales } from './data/sales-70-27-30';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app';

  salesList: EmployeeData[] = [];
  rndList: EmployeeData[] = [];

  constructor(
    private employeesService: EmployeesService,
  ) {}

  ngOnInit() {
    this.salesList = [ ...this.salesList, ...Sales];
    this.rndList = [ ...this.rndList, ...Rnd];
  }

  add(list: EmployeeData[], name: string) {
    list.unshift({ label: name, num: this.employeesService.generateNumber(NumRange) });
  }

  remove(list: EmployeeData[], node: EmployeeData) {
    list.splice(list.indexOf(node), 1);
  }

  ngDoCheck() {
    console.log('[App Component] change detection triggered');
  }

  reset() {
    this.salesList = [ ...[], ...Sales];
    this.rndList = [ ...[], ...Rnd];
  }
}
