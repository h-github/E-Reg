import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  moduleId: module.id,
  selector: 'reg-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  student: Student;
  constructor() { 
    this.student = new Student();
  }

  ngOnInit() {

  }

  submitEmail() {
    console.log(JSON.stringify(this.student));
  }
}
