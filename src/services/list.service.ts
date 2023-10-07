import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { List } from 'src/classes/list';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  insert(list: List){
    this.database.list('list').push(list).then((result: any) => {
      console.log(list);
      
    })
  }

  update(list: List, key: string)
  {
    this.database.list('list').update(key, list).catch((err: any) => {
      console.error(err);      
    })
  }

  getAll(){
    return this.database.list('list')
    .snapshotChanges().pipe(
      map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val() as List
          }))
      })
    )
  }


  constructor(public database: AngularFireDatabase) { 


  }
}
