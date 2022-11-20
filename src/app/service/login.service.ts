import { Injectable } from '@angular/core';
import { AppUser } from '../model/user.model';
import{Observable} from 'rxjs'
import { throwError } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users:AppUser[]=[];
  authenticatedUser : AppUser|undefined;
  constructor() {
    this.users.push({userId:'1',username:'user1',password:'1234',roles:['USER']});
    this.users.push({userId:'2',username:'user2',password:'1235',roles:['USER']});
    this.users.push({userId:'3',username:'user3',password:'1236',roles:['USER','ADMIN']});
  }

  public authenticateUser(appUser: AppUser):Observable<boolean>{
    this.authenticatedUser=appUser;

    localStorage.setItem('authUser',JSON.stringify({username:appUser.username, roles:appUser.roles,jwt:'JWT_TOKEN'}));
    return of(true)
  }

  // Backend Mthod
  public login(username: string,password:string):Observable<AppUser>{
    let appUser = this.users.find(u=>u.username==username);

    if(!appUser) return throwError( new Error('Bad credentials'))
    if(appUser.password != password) return throwError( new Error('Bad credentials'))

    return of(appUser);
  }

  public hasRole(role:string):boolean{
    return this.authenticatedUser!.roles.includes(role);
  }

  public isAuthenticated():boolean{
    return this.authenticatedUser != undefined;
  }
}
