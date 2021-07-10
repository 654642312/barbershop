import { ProductsService } from './../../../shared/services/products/products.service';
import { ProductTableModel } from './../../../shared/services/indexedDB/IndexedDB-tables.model';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  displayedColumns: string[] = ['id', 'name', 'type', 'price', 'stock'];
  dataSource: MatTableDataSource<ProductTableModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  load = true;

  form: FormGroup;

  constructor( private productsService: ProductsService, private formBuilder: FormBuilder ) {
    
    this.loadTable();

    this.initForm();

  }

  loadTable(){
    this.productsService.getProducts().then(res=>{
      this.dataSource = new MatTableDataSource( res );

      setTimeout(() => {
        this.load = false;
      }, 1000);
    })
  }

  initForm(){
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      price: [0, [
        Validators.required
      ]],
      stock: [0, [
        Validators.required
      ]]
    });
  }

  async newProduct(){
    await this.productsService.addProduct(this.form.value);
    this.load = true;
    this.loadTable();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
