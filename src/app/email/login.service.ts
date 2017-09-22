import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { LoggerService } from '../global-services/logger.service'
import { User } from '../models/user';
import { Student } from '../models/student';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class LoginService {

  private studentUrl = 'api/student';

  constructor(
    private loggerService: LoggerService,
    private http: Http) { }


  setUserInfor(username: string, password: string): Promise<User> {

    let user: User = {
      username: username,
      password: password
    };
    let student: Student;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.loggerService.log(`Submitting user ${username} info ...`);

    return this.http.post(this.studentUrl, user, options)
      .toPromise()
      .then(response => {
        const student = response.json().data as Student;
        this.loggerService.log(`${student.fname} ${student.lname} loged in`); 
        return student;
    },
    error => {
        this.loggerService, console.log(`Error occurred: ${error}`);
        return Promise.reject('Something bad happened in getting customers please check the console');
    });





  }

  handleErrorPromise(){
    this.loggerService.log(`Error, login failed!`);
  }
}
