import {FormBuilder} from "@angular/forms";
import { Component } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './name.component.html',
    styleUrls: ['./cart.component.css']
  })

export class CartComponent {

    checkoutForm = this.formBuilder.group({
        name: '',
    });

    constructor(
      private formBuilder: FormBuilder,
    ) {}

    onSubmit(): void {
        // Process checkout data here
        console.warn('Your order has been submitted', this.checkoutForm.value);
        this.checkoutForm.reset();
      }
  }