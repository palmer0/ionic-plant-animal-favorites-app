import { Injectable } from '@angular/core';
import {Animal} from "../models/animal.model";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animalsCollection: AngularFirestoreCollection<Animal>;

  constructor(private afs: AngularFirestore) {
    this.animalsCollection = afs.collection<Animal>('animals');
  }

  getAllAnimals() {
    return this.animalsCollection.valueChanges({ idField: 'id' });
  }

  getAnimalById(animalId: string) {
    return this.afs.doc<Animal>(`animals/${animalId}`).valueChanges();
  }

  /*toggleFavorite(animalId: string, isFavorite: boolean) {
    return this.afs.doc<Animal>(`animals/${animalId}`).update({ isFavorite });
  }*/

  toggleFavorite(animal: Animal) {
    animal.favorite = !animal.favorite;
    this.afs.doc<Animal>(`animals/${animal.id}`).update(animal);
  }

  getFavorites() {
    return this.afs
      .collection<Animal>('animals', ref =>
        ref.where('favorite', '==', true)
      ).valueChanges({ idField: 'id' });

    /*
    return this.afs
      .collection<Animal>('animals', ref => ref.where('isFavorite', '==', true))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Animal;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    */
  }

  /*
  getFavorites(): Observable<Animal[]> {
    return this.getAnimals().pipe(
      map(animals => animals.filter(animal => animal.favorite === true))
    );
  }
  */
}
