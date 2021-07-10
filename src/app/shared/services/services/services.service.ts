import { ServiceTableModel } from './../indexedDB/IndexedDB-tables.model';
import { IndexedDBService } from './../indexedDB/indexed-db.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public service: ServiceTableModel

  constructor(private indexedDBService: IndexedDBService) { }

  public async addService(data:any){
    let active = this.indexedDBService.db.result;
    let table = active.transaction(["service"], "readwrite"); 
    let object = table.objectStore("service");
    let request = object.add({
      name: data.name,
      price: data.price,
      type: 'service',
      description: 'service' 
    });
      request.onerror = function (e) {
        console.log('error: '+ e)
      };
      table.oncomplete = function (e) { 
        console.log('success: '+ e)
      }
  }

  public async getServices(){
    let active = this.indexedDBService.db.result;
    let data = active.transaction(["service"], "readonly");
    let object = data.objectStore("service");
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

  public async getService(name:string){
    let active = this.indexedDBService.db.result;
    let data = active.transaction('service', 'readonly');
    let store = data.objectStore('service');
    let index = store.index('name');
    index.get(name).onsuccess = (event) => {
        let response = event.target.result;  
        if( response ){
          this.service = response;
          return true;
        } else {
          console.log('no existe');
          return false;
        }
    }
    index.get(name).onerror = function(event) {
        alert("not found");
        return false;
    };
  }
}
