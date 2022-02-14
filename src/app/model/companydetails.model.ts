import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDetailsModel{
  
  public companyInfo : any = 
    {
      name : 'PBR Shopping',
      address : 'No: 12,OMR Road',
      city: 'Hyderabad',
      pincode: '500018',
      email: 'customer.care@pbrshopping.com',
      phone : '040-43232123'
    }
    
  
} 