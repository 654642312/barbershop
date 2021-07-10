import { SettingsService } from './../settings/settings.service';
import { IndexedDBService } from './../indexedDB/indexed-db.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private indexedDBService: IndexedDBService, public settings: SettingsService) { }

  public async addClient(name:string, id:number, member: boolean){
    let active = this.indexedDBService.db.result;
    let data = active.transaction(["client"], "readwrite"); 
    let object = data.objectStore("client");
    let request = object.add({
      id: id,
      name: name,
      member: member,
      points: 0,
      visits: [],
      spent: 0
    });
      request.onerror = function (e) {
        console.log('error: '+ e)
      };
      data.oncomplete = function (e) { 
        console.log('success: '+ e)
      }
  }

  public async getClients(){
    let active = this.indexedDBService.db.result;
    let data = active.transaction(["client"], "readonly");
    let object = data.objectStore("client");
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

  public async getClient(id:number){
    let active = this.indexedDBService.db.result;
    let data = active.transaction('client', 'readonly');
    let store = data.objectStore('client');
    let index = store.index('id');

    let setVarValue = (variable,value, subVariable:boolean | string = false) =>{
      console.log('asdasdasdasd')
      if (subVariable) {
        this[variable][subVariable] = value;
      }else{
        this[variable] = value;
      }
    }

    index.get(id).onsuccess = function(event) {
        let res = event.target.result;  
        if( res ){
          console.log(res);
          setVarValue('settings', res, 'clientSelected')
          return res;
        } else {
          console.log('no existe');
          return false
        }
    }
    index.get(id).onerror = function(event) {
        alert("not found");
        return false;
    };
  }

  public async addVisit(data){
    console.log(data);
    let active = this.indexedDBService.db.result;
    let transaction = active.transaction(["client"], "readwrite");
    let store = transaction.objectStore("client");

    let index = store.index('id');
    index.get(data.work.clientId).onsuccess = function(event) {
        let client = event.target.result;
        client.visits.push(data.work);

        let update = store.put({
          id: client.id,
          name: client.name,
          points: client.points + (data.work.priceTotal / 100),
          spent: client.spent + data.work.priceTotal,
          visits: client.visits
        });
        update.onerror = function (e) {
          console.log('error: '+ e)
        };
        update.oncomplete = function (e) { 
          console.log('succes: '+ e)
        }
    }
    index.get(data.work.clientId).onerror = function(event) {
        alert("Usuario no registrado en la Base de Datos");
    };
  }
  
}
