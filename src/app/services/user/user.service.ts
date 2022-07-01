import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL = 'https://62860d1f96bccbf32d6e2bf5.mockapi.io/students'

  public user?: User;

  constructor(private http: HttpClient, private router: Router) { }

  login(mail: string, password: string){
    const url = this.BASE_URL + '?email=' + mail;
    this.http.get<User[]>(url).subscribe({
    next: users => {
     
      if(users[0].password === password){
        this.user = users[0]
        this.router.navigate(['/user'])
      } else {
        alert('user o password errata')
        
      }
    },
    error: err => console.log(err)
    })
    
    
    
  }
  logout(){
    this.user = undefined
  }
  register(user: User){
    this.router.navigate(['/login'])
  }
}
