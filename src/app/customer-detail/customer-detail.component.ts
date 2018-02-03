import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from '../Services/Customer-Service';
import { Customer } from '../models/customer';
import { JsonPipe } from '@angular/common';
import { ChangeChar } from '../pipes/changeToCapital';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers: [ ChangeChar]
})
export class CustomerDetailComponent implements OnInit {
// using input directive to get the customerDetail from parent
  customer: Customer = new Customer();
  id: number;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
// get the customer based on his id using getCustomer() method
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params.id;
      this.customer = this.customerService.getCustomer(this.id);
    });
  }
// navigate to form on edit- customers/'id'/edit
  onEdit() {
    this.router.navigate(['/customers', this.id, 'edit']);
  }
}
