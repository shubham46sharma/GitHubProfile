import { Injectable } from '@angular/core';
import {USER_LIST} from '../../mocks/user.mock';
import { User } from '../../models/user.interface';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  constructor() {
    console.log('Hello GithubServiceProvider Provider');
  }
  mockgetUserInformation(username:string): Observable<User>{
    return Observable.of(USER_LIST.filter(user =>user.name ===username)[0]);

  }
}
