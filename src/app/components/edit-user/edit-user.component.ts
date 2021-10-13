import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public editForm: FormGroup;
  userRef: any

  constructor(public userService: UserService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router) {this.editForm = this.formBuilder.group({
      npm: [''],
      nama: [''],
      matric: [''],
      jurusan: [''],
      fakultas: [''],
      agama: [''],
      alamat: [''],
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.userService.getUserDoc(id).subscribe(res => {
      this.userRef = res;
      this.editForm = this.formBuilder.group({
        npm: [this.userRef.npm],
        nama: [this.userRef.nama],
        matric: [this.userRef.matric],
        jurusan: [this.userRef.jurusan],
        fakultas: [this.userRef.fakultas],
        agama: [this.userRef.agama],
        alamat: [this.userRef.alamat],
      })      
    })
  }

onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    
    this.userService.updateUser(this.editForm.value, id);
    this.router.navigate(['list-users']);
  };

}
