import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from '../customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/template-driven/customer.component.html'
})
export class CustomerComponent  {
    // we use a class and not an interface because we want to create
    // a new instance of the class for the new customer information
    customer: Customer= new Customer();

    save(customerForm: NgForm) {
        console.log(customerForm.form);
        console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
}
