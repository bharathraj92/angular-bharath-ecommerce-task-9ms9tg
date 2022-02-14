import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { emailValidation,len,numeric } from '../validations/custom.validate';

@Injectable()
export class BillingFormModel{
  
  public data : any = [
    {
      label : 'First Name',
      placeholder : 'First Name',
      uid: 'firstName',
      type: 'text',
      value: '',
      validation : [ Validators.required ],
      errorMsg : 'Please enter first name' 
    },
    {
      label : 'Last Name',
      placeholder : 'Last Name',
      uid: 'lastName',
      type: 'text',
      value: '',
      validation : [ Validators.required ],
      errorMsg : 'Please enter last name'
    },
    {
      label : 'Email',
      placeholder : 'Email',
      uid: 'email',
      type: 'text',
      value: '',
      validation : [ Validators.required , emailValidation() ],
      errorMsg : 'Please enter email'
    },
    {
      label : 'Confirm Email',
      placeholder : 'Confirm Email',
      uid: 'email',
      type: 'text',
      value: '',
      validation : [ Validators.required , emailValidation() ],
      errorMsg : 'Please enter email'
    },
    {
      label : 'Phone no',
      placeholder : 'Phone no',
      uid: 'mobile',
      type: 'text',
      value: '',
      validation : [ Validators.required,len(10),numeric()],
      errorMsg : 'Please enter mobile no' 
    },
    {
      label : 'Address',
      placeholder : 'Address',
      uid: 'addressOne',
      type: 'text',
      value: '',
      validation : [ Validators.required],
      errorMsg : 'Please enter address one'
    }
   
  ]
} 