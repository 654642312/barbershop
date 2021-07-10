import { SettingsService } from './../../../shared/services/settings/settings.service';
import { ServicesService } from './../../../shared/services/services/services.service';
import { ProductsService } from './../../../shared/services/products/products.service';
import { BarbersService } from './../../../shared/services/barbers/barbers.service';
import { ClientsService } from './../../../shared/services/clients/clients.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _value: number = 0;
  _step: number = 1;
  _min: number = 0;
  _max: number = Infinity;
  _wrap: boolean = false;

  public formMember: FormGroup;
  public formVisiter: FormGroup;

  public load = true;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  clients;
  barbers;
  products;
  services;

  total = 0;

  constructor(
    private clientsService: ClientsService,
    private barbersService: BarbersService,
    private productsServices: ProductsService,
    private servicesServices: ServicesService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public settings: SettingsService) {

    this.loadTables();

    this.initForm();

  }

  ngOnInit() {

    this.filteredOptions = this.formVisiter.controls.clientId.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    setTimeout(() => {
      this.load = false;
    }, 1000);
  }

  private initForm() {
    this.formVisiter = this.formBuilder.group({
      clientId: [, [
        Validators.required
      ]],
      services: [[]],
      products: [[]],
      barber: ['', [
        Validators.required
      ]],
    });

    this.formMember = this.formBuilder.group({
      clientId: [, [
        Validators.required
      ]],
      services: [[]],
      products: [[]],
      barber: ['', [
        Validators.required
      ]],
    });

    this.formMember.controls.clientId.valueChanges.subscribe((changes) => {
      console.log(changes)
      if (changes == 12345) {
        this.selectClient(changes);
      }
    })
  }

  loadTables() {
    this.clientsService.getClients().then((res: any) => {
      this.clients = res;
      let options = res;
      setTimeout(() => {
        this.options = options;
        console.log(this.options)
      }, 2000);
    })

    this.barbersService.getBarbers().then(res => {
      this.barbers = res;
      this.options = this.barbers.map(barber => {
        return barber.name;
      })
    })

    this.productsServices.getProducts().then(res => {
      this.products = res;
      this.options = this.products.map(product => {
        return product.name;
      })
    })

    this.servicesServices.getServices().then(res => {
      this.services = res;
      this.options = this.services.map(service => {
        return service.name;
      })
    })
  }

  public async selectClient(client) {
    this.clientsService.getClient(client);
    console.log(this.settings.clientSelected);
  }

  private _filter(value: any): string[] {
    const filterValue = value.name;

    return this.options.filter(option => option['name'].indexOf(filterValue) === 0);
  }

  addService(e, value) {
    this.servicesServices.getService(value);

    setTimeout(() => {
      if (e.checked) {
        this.formMember.value.services.push(value);

        this.total += this.servicesServices.service.price;
        return true;
      } else {
        let i = this.formMember.value.services.indexOf(value);

        if (i !== -1) {
          this.formMember.value.services.splice(i, 1);
          this.total -= this.servicesServices.service.price;
        }
        return false;
      }
    }, 1000);
  }

  async addProduct(e, value) {
    this.productsServices.getProduct(value);

    setTimeout(() => {
      if (e.checked) {
        this.formMember.value.products.push(value);

        this.total += this.productsServices.product.price;
        return true;
      } else {
        let i = this.formMember.value.products.indexOf(value);

        if (i !== -1) {
          this.formMember.value.products.splice(i, 1);
          this.total -= this.productsServices.product.price;
        }
        return false;
      }
    }, 1000);
  }

  async addItem(event, product) {
    this.productsServices.getProduct(product.name);

    setTimeout(() => {
      if (event != 0) {
        this.formMember.value.products.push(product);

        this.total += this.productsServices.product.price;
        return true;
      } else {
        let i = this.formMember.value.products.indexOf(product);

        if (i !== -1) {
          this.formMember.value.products.splice(i, 1);
          this.total -= this.productsServices.product.price;
        }
        return false;
      }
    }, 1000);
  }

  cobrar() {
    // let data:any = {};
    // data.work = this.form.value;
    // data.work.date = new Date();
    // data.work.priceTotal = this.total;

    // console.log(data)
    // if ( this.clientsService.getClient(this.form.value.client) ) {
    //   this.snackBar.open('Visita registrada correctamente', 'Ok!');
    //   this.load = true;

    //   this.barbersService.addWork(data);
    //   this.clientsService.addVisit(data);

    //   this.form.reset();
    //   this.initForm();
    //   this.total = 0;
    //   setTimeout(() => {
    //     this.load = false;
    //   }, 1000);
    // } else {

    // }
  }

  public async chargueTheMenber() {
    let data: any = {};
    data.work = this.formMember.value;
    data.work.date = new Date();
    data.work.priceTotal = this.total;

    console.log(data)
    if (this.clientsService.getClient(this.formMember.value.clientId)) {
      this.snackBar.open('Visita registrada correctamente', 'Ok!');
      this.load = true;

      this.barbersService.addWork(data);
      this.clientsService.addVisit(data);

      for(let i = 0; i < data.work.products.length; i++) {
        await this.productsServices.updateProduct(data.work.products[i].name, {
          stock: data.work.products[i].stock - 1
        })
      }


      this.formMember.reset();
      this.initForm();
      this.total = 0;
      setTimeout(() => {
        this.load = false;
      }, 1000);
    }
  }

  chargueTheVisiter() {
    let data: any = {};
    data.work = this.formVisiter.value;
    data.work.date = new Date();
    data.work.priceTotal = this.total;

    console.log(data)
    if (this.clientsService.getClient(this.formVisiter.value.clientId)) {
      this.snackBar.open('Visita registrada correctamente', 'Ok!');
      this.load = true;

      this.barbersService.addWork(data);
      this.clientsService.addVisit(data);

      this.formVisiter.reset();
      this.initForm();
      this.total = 0;
      setTimeout(() => {
        this.load = false;
      }, 1000);
    }
  }
}
