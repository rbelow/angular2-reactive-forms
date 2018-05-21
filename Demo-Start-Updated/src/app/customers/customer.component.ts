import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/template-driven/customer.component.html'
})
export class CustomerComponent implements OnInit {
    customerForm: FormGroup;
    // we use a class and not an interface because we want to create
    // a new instance of the class for the new customer information
    customer: Customer= new Customer(); // data model defines the data passed from/to our back-end server. Data model !== Form model

    ngOnInit(): void {
        // `AbstractControl` is the base class for `FormControl` and `FormGroup`
        this.customerForm = new FormGroup({
            // Form Model that tracks form value and state
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            // set/pass default input values through the `FormControl` constructor
            sendCatalog: new FormControl(true)
        });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
}
