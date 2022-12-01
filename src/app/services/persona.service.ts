import { Injectable } from '@angular/core';
import { persona } from '../domain/persona';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  listaPersona = new Array();
  personas: any
  private personaCollection: AngularFirestoreCollection<persona>;

  
  constructor(private afs: AngularFirestore) { 
    this.personaCollection= afs.collection<persona>('prueba1');
  }

  getlistarFire(){
    return this.personaCollection.valueChanges();
   }
}
