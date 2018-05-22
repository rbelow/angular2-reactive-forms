import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit {
    customerForm: FormGroup;
    // we use a class and not an interface because we want to create
    // a new instance of the class for the new customer information
    customer: Customer = new Customer(); // data model defines the data passed from/to our back-end server. Data model !== Form model

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        // FormBuilder allows us to create directly FormControl's and FormGroup's without explicitly defining them
        // e. g. `this.fb.group({senCatalog: {value: true, disabled: false}})`
        // e. g. `this.fb.group([{senCatalog: {value: true, disabled: false}, /* validation rules */]})`        
        this.customerForm = this.fb.group({
            firstName: '',
            // lastName: {value: 'n/a', disabled: true},
            lastName: '',
            email: '',
            // set/pass default input values through the `FormControl` constructor
            sendCatalog: true
        });
        // `AbstractControl` is the base class for `FormControl` and `FormGroup`
        // this.customerForm = new FormGroup({
        //     // Form Model that tracks form value and state
        //     firstName: new FormControl(),
        //     lastName: new FormControl(),
        //     email: new FormControl(),
        //     // set/pass default input values through the `FormControl` constructor
        //     sendCatalog: new FormControl(true)
        // });
    }

    // set all form data with setValue()
    // set individual form data with patchValue()
    populateTestData(): void {
        this.customerForm.patchValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            sendCatalog: false
        })
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
}
