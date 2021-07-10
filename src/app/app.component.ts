import { IndexedDBService } from './shared/services/indexedDB/indexed-db.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public indexedDBService: IndexedDBService){
    
  }
  title = 'barberShopAdmin';
}
