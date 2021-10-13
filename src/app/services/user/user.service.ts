import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFirestore: AngularFirestore) { }
  getUserDoc(id) {
    return this.angularFirestore
    .collection('user-collection')
    .doc(id)
    .valueChanges()
  }

  getUserList() { 
    return this.angularFirestore
    .collection("user-collection")
    .snapshotChanges();
  }

  createUser(user: User) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("user-collection")
        .add(user)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteUser(user) {
    return this.angularFirestore
      .collection("user-collection")
      .doc(user.id)
      .delete();
  }
  
  updateUser(user: User, id) {
    return this.angularFirestore
      .collection("user-collection")
      .doc(id)
      .update({
        npm: user.npm,
        nama: user.nama,
        matric: user.matric,
        jurusan: user.jurusan,
        fakultas: user.fakultas,
        agama: user.agama,
        alamat: user.alamat
      });
  }
}

