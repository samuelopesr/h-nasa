import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from 'src/classes/list';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  private listSource = new BehaviorSubject({
    list: new List(),
    key: ''
  })

  currentList = this.listSource.asObservable()

  changeList(list: List, key:string)
  {
    this.listSource.next(
      {
        list: list, key: key
      }
    )
  }

  constructor() { }
}
