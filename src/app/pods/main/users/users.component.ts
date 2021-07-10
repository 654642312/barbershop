import { ClientsService } from './../../../shared/services/clients/clients.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BarberTableModel, ClientTableModel } from './../../../shared/services/indexedDB/IndexedDB-tables.model';
import { BarbersService } from './../../../shared/services/barbers/barbers.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  displayedColumnsBarber: string[] = ['id', 'name', 'profits', 'totalContributions', 'works'];
  dataSourceBarber: MatTableDataSource<BarberTableModel>;

  displayedColumnsClient: string[] = ['id', 'name', 'visits', 'spent', 'points', 'view'];
  dataSourceClient: MatTableDataSource<ClientTableModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  load = true;

  formClient: FormGroup;
  formBarber: FormGroup;

  constructor( private barbersService: BarbersService, private clientsService: ClientsService, private formBuilder: FormBuilder ) {
    
    this.loadTable();

    this.initForm();

  }

  loadTable(){
    this.barbersService.getBarbers().then(res=>{
      this.dataSourceBarber = new MatTableDataSource( res );

      setTimeout(() => {
        this.load = false;
      }, 1000);
    })
    this.clientsService.getClients().then(res=>{
      this.dataSourceClient = new MatTableDataSource( res );

      setTimeout(() => {
        this.load = false;
      }, 1000);
    })
  }

  initForm(){
    this.formBarber = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]]
    });
    this.formClient = this.formBuilder.group({
      id: [ , [
        Validators.required
      ]],
      name: ['', [
        Validators.required
      ]],
      member: [false, [
        Validators.required
      ]]
    });
  }

  async newBarber(){
    await this.barbersService.addBarber(this.formBarber.value.name)
    this.load = true;
    this.loadTable();
  }

  async newClient(){
    await this.clientsService.addClient(this.formClient.value.name, this.formClient.value.id, this.formClient.value.member)
    this.load = true;
    this.loadTable();
  }

  ngAfterViewInit() {
    this.dataSourceBarber.paginator = this.paginator;
    this.dataSourceBarber.sort = this.sort;
    this.dataSourceClient.paginator = this.paginator;
    this.dataSourceClient.sort = this.sort;
  }

  applyFilterBarber(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceBarber.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceBarber.paginator) {
      this.dataSourceBarber.paginator.firstPage();
    }
  }
  
  applyFilterClient(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceClient.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceClient.paginator) {
      this.dataSourceClient.paginator.firstPage();
    }
  }
}
