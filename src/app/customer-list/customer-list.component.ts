import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../models/customer';
import { CustomerService } from '../Services/Customer-Service';
import { SearchPipe } from '../pipes/SearchByPipe';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [SearchPipe]
})
export class CustomerListComponent implements OnInit {

  @Input() customers: Customer[];
  @Input() cus: Customer;
  private searchData: string;
  constructor(private customerService: CustomerService, private router: Router) { }
// getting the customer list on init
  ngOnInit() {
    this.customers = this.customerService.getCustomerList();
  }
  // navigating to form on clicking the add- customers/new/edit
  onAdd() {
    this.router.navigate(['/customers', 'new', 'edit']);
  }
}
