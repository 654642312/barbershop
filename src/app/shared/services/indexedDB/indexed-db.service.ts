import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  private indexedDB = window.indexedDB;
  public db = null

  constructor() {
    this.iniciarBD();
  } 
  iniciarBD(){
    this.db = indexedDB.open("barberShopDB", 1);
    this.db.onupgradeneeded = (e:any) => {
        let active = this.db.result;

                         
        let client = active.createObjectStore("client", {keyPath: "id", autoIncrement:false});
        client.createIndex('name', 'name', {unique: false});
        client.createIndex('member', 'member', {unique: false});
        client.createIndex('visits', 'visits', {unique: false});
        client.createIndex('points', 'points', {unique: false});
        client.createIndex('spent', 'spent', {unique: false}); 
        client.createIndex('id', 'id', {unique: true});  

        let barber = active.createObjectStore("barber", {keyPath: "id", autoIncrement:true});
        barber.createIndex('name', 'name', {unique: false});
        barber.createIndex('works', 'works', {unique: false});
        barber.createIndex('totalContributions', 'totalContributions', {unique: false});
        barber.createIndex('profits', 'profits', {unique: false});
        barber.createIndex('id', 'id', {unique: true});

        let service = active.createObjectStore("service", {keyPath: "id", autoIncrement:true});
        service.createIndex('name', 'name', {unique: false});
        service.createIndex('type', 'type', {unique: false});
        service.createIndex('description', 'description', {unique: false});
        service.createIndex('price', 'price', {unique: false});
        service.createIndex('id', 'id', {unique: true});

        let product = active.createObjectStore("product", {keyPath: "id", autoIncrement:true});
        product.createIndex('name', 'name', {unique: true});
        product.createIndex('type', 'type', {unique: false});
        product.createIndex('stock', 'stock', {unique: false});
        product.createIndex('price', 'price', {unique: false});
        product.createIndex('id', 'id', {unique: true});
    }
    this.db.onsuccess = function (e) {
        console.log("Base De Datos cargada correctamente");
    }

    this.db.onerror = function (e) {
        alert('Error al cargar Base de Datos');
    }
  }
}
