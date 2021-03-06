import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor( public db: AngularFireDatabase) { }

  altausuario(usuarioNuevoCorreo: string, usuarioNuevoUID: string) {
    this.db.object('users/userUID/' + usuarioNuevoUID.toString()).update({correo: usuarioNuevoCorreo});
    console.log('Insertado uid');
  }

  bajausuario(uidBorrar: string) {
    // boora entrada
    this.db.object('users/userUID/' + uidBorrar).remove();
  }
}
