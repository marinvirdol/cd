import { Component, OnInit, Input, EventEmitter, Output, DoCheck } from '@angular/core';
import { EmployeeData } from '../employees.service';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit, DoCheck {
  @Input() data: EmployeeData[];
  @Input() department: string;

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();

  label: string;

  constructor() { }

  ngOnInit() {
  }

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  calculate(num: number) {
    return fibonacci(num);
  }

  ngDoCheck() {
    console.log('[Employees List Component] change detection triggered');
  }

  trackByFn(index) {
    return index;
  }

}
