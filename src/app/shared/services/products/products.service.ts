import { ProductTableModel } from './../indexedDB/IndexedDB-tables.model';
import { IndexedDBService } from './../indexedDB/indexed-db.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public product: ProductTableModel;

  constructor(private indexedDBService: IndexedDBService) { }

  public async getProducts(){
    let active = this.indexedDBService.db.result;
    let data = active.transaction(["product"], "readonly");
    let object = data.objectStore("product");
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

  public async addProduct(data:any){
    let active = this.indexedDBService.db.result;
    let table = active.transaction(["product"], "readwrite"); 
    let object = table.objectStore("product");
    let request = object.add({
      name: data.name,
      price: data.price,
      type: 'product',
      stock: data.stock
    });
      request.onerror = function (e) {
        console.log('error: '+ e)
      };
      table.oncomplete = function (e) { 
        console.log('success: '+ e)
      }
  }

  public async getProduct(name:string){
    let active = this.indexedDBService.db.result;
    let data = active.transaction('product', 'readonly');
    let store = data.objectStore('product');
    let index = store.index('name');
    index.get(name).onsuccess = (event) => {
        let response = event.target.result;  
        if( response ){
          this.product = response;
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

  public async updateProduct(name: string, updates: any = {}) {
    let active = this.indexedDBService.db.result;
    let data = active.transaction('product', 'readwrite');
    let store = data.objectStore('product');
    let index = store.index('name');

    index.get(name).onsuccess = (event) => {
        let response = event.target.result;  
        if( response ){

          store.put({
            id: response.id,
            name: updates.name || response.name,
            type: updates.type || response.type,
            stock: updates.stock || response.stock,
            price: updates.price || response.price,
          })

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
