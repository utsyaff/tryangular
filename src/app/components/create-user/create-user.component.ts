import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public userForm: FormGroup;
  constructor(public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router) {this.userForm = this.formBuilder.group({
      npm: [''],
      nama: [''],
      matric: [''],
      jurusan: [''],
      fakultas: [''],
      agama: [''],
      alamat: [''],

    }) }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.userService.createUser(this.userForm.value);
    this.router.navigate(['list-users']); 
   };
}
