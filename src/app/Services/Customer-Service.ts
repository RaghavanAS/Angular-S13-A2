import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {
  // CustomerList array of customer
  private customerList: Customer[] = [
    { id: 1, name: 'John', phone: '9988776655', email: 'john@abc.xyz', city: 'Bengaluru', DOB: '12-10-2010' },
    { id: 2, name: 'Asif', phone: '1122334455', email: 'asif@abc.xyz', city: 'Chennai', DOB: '12-10-2010' },
    { id: 3, name: 'Hari', phone: '3355776644', email: 'hari@abc.xyz', city: 'Mumbai', DOB: '12-10-2010' },
    { id: 4, name: 'Amar', phone: '2244668800', email: 'amar@abc.xyz', city: 'New Delhi', DOB: '12-10-2010'}
  ];
  constructor() {}
  // returns the CustomerList
  getCustomerList(): Customer[] {
    return this.customerList;
  }

  getCustomer(id: number): Customer {

    // tslint:disable-next-line:no-shadowed-variable
    const customer = this.customerList.find(customer => customer.id === id);
    return customer;
  }

  updateCustomer(id: number, CustomerInfo: Customer) {
    const customer = this.getCustomer(id);

    if (customer) {
      console.log(customer.city);
      customer.name = CustomerInfo.name;
      customer.phone = CustomerInfo.phone;
      customer.email = CustomerInfo.email;
      customer.city = CustomerInfo.city;
      customer.DOB = CustomerInfo.DOB;
    }
  }

  // Stores a customer to the CustomerList
  storeCustomer(customer: Customer) {
      const newCustomer = new Customer();
      newCustomer.id = this.generateId();
      newCustomer.name = customer.name;
      newCustomer.city = customer.city;
      newCustomer.email = customer.email;
      newCustomer.phone = customer.phone;
      newCustomer.DOB = customer.DOB;
      this.customerList.unshift(newCustomer);
      console.log(this.customerList);
  }
  private generateId(): number {
    let id = 1;
    const lastIndex = this.customerList.length - 1;
    if (lastIndex > -1) {
      id = this.customerList[lastIndex].id + 1;
    }
    return id;
  }
}
