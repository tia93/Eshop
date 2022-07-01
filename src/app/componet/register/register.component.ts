import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  constructor(private userS: UserService, private fb: FormBuilder) { }
  
  userForm = this.fb.group({
    name : new FormControl('',Validators.required ),
    surname : new FormControl('',Validators.required),
    dob  : new FormControl('',Validators.required),
    email  : new FormControl('',Validators.required),
    password  : new FormControl('',Validators.required),
    addres  : new FormControl('',Validators.required),
    city  : new FormControl('',Validators.required),
    cardnumber : new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }

  register(){
    // this.userS.register()
    console.log('yoyo')
    console.log(this.userForm);
  }

  onSubmit(){
    console.log(this.userForm.value);
    
  }
}
