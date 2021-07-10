import { IndexedDBService } from './../indexedDB/indexed-db.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarbersService {

  constructor(private indexedDBService: IndexedDBService) { }

  public async addBarber(name:string){
    let active = this.indexedDBService.db.result;
    let data = active.transaction(["barber"], "readwrite"); 
    let object = data.objectStore("barber");
    let request = object.add({
      name: name,
      profits: 0,
      totalContributions: 0,
      works: []
    });
    request.onerror = function (e) {
      console.log('error: '+ e)
    };
    data.oncomplete = function (e) { 
      console.log('succes: '+ e)
    }
  }

  public async getBarber(name:string){
    let active = this.indexedDBService.db.result;
    let data = active.transaction('barber', 'readonly');
    let store = data.objectStore('barber');
    let index = store.index('name');
    index.get(name).onsuccess = function(event) {
        let res = event.target.result;
        console.log(res);
    }
    index.get(name).onerror = function(event) {
        alert("not found");
    };
  }

  public async getBarbers(){
    let active = this.indexedDBService.db.result;
    let data = active.transaction(["barber"], "readonly");
    let object = data.objectStore("barber");
    let elements = [];
    object.openCursor().onsuccess = await function (e) {
        let result = e.target.result;
        if (result === null) {
            return;
        }
        elements.push(result.value);
        result.continue();
    };
    data.oncomplete = await function() {
      return elements;
    };
    return elements;
  }

  public async addWork(data){
    console.log(data);
    let active = this.indexedDBService.db.result;
    let transaction = active.transaction(["barber"], "readwrite");
    let store = transaction.objectStore("barber");

    let index = store.index('id');
    index.get(data.work.barber).onsuccess = function(event) {
        let barber = event.target.result;
        barber.works.push(data.work);

        let update = store.put({
          id: barber.id,
          name: barber.name,
          profits: barber.profits,
          totalContributions: barber.totalContributions,
          works: barber.works
        });
        update.onerror = function (e) {
          console.log('error: '+ e)
        };
        update.oncomplete = function (e) { 
          console.log('succes: '+ e)
        }
    }
    index.get(data.work.barber).onerror = function(event) {
        alert("Usuario no registrado en la Base de Datos");
    };
  }

}
