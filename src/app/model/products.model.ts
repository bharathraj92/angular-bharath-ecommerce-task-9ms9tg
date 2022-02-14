import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ProductsModel{
  public data : any = [
    {
      p_id : '1',
      product_name : 'Essential Fleece Pullover',
      product_desc : '6 colours available',
      product_price : '29.99',
      product_available : true,
      product_image : 'https://lh3.googleusercontent.com/ivlkWE_ULnG7A99ZhVdeRNE1E8ks-5pKdQYDh1v53-WgxWeiQagqLrfpV97g729-4owW=s85'
    },
    {
      p_id : '2',
      product_name : 'Basic Hoodie',
      product_desc : '6 colours available',
      product_price : '29.95',
      product_available : true,
      product_image : 'https://lh3.googleusercontent.com/T6tFX-Bfp0sPaPlfyGZnku3Dx7Ku-zb8CdhA9Q2e80sL1x3pEOJ_WLp5Lws_yvVhp08R34U=s85'
    },
    {
      p_id : '3',
      product_name : 'Collab Fleece Pullover',
      product_desc : '5 colours available',
      product_price : '39.99',
      product_available : true,
      product_image : 'https://lh3.googleusercontent.com/-Ed8sRp1lWRogR40op5rkGWZlOwe8bxkBNE55mASAmjVRmZTXJiqlhnmkRMeJ4V0MwAgbw=s85'
    },
    {
      p_id : '4',
      product_name : 'Cotton Rib Cardigan',
      product_desc : '6 colours available',
      product_price : '39.99',
      product_available : true,
      product_image : 'https://lh3.googleusercontent.com/diG10ibZgtY-mSsPb_I98Jj1DaUPzUmXLeuloOa8R0AWPEonN9Zpwu0p_pf8y051nfKaow=s85'
    },
    {
      p_id : '5',
      product_name : 'Basic Track Pant',
      product_desc : '4 colours available',
      product_price : '29.95',
      product_available : true,
      product_image : 'https://lh3.googleusercontent.com/X8Yjfm_obAeDs4w4sj0ddavP3EqG-cnYjXDZuZrTLNjbVqWp4YDlfwvgVKCSVpqRCPIYog=s85'
    },
    {
      p_id : '6',
      product_name : 'Tech Track Pant',
      product_desc : '3 colours available',
      product_price : '39.95',
      product_available : false,
      product_image : 'https://lh3.googleusercontent.com/EVGEArxN8x9Ec8zNle0Gc-GSJIIqT1U5AZwdlaSBK9CUtAlm1G5kO4oZ4i2J0NuGpO8_BA=s85'
    },
    {
      p_id : '7',
      product_name : 'Active Anorak',
      product_desc : '4 colours available',
      product_price : '79.99',
      product_available : false,
      product_image : 'https://lh3.googleusercontent.com/grYxyzIbA1EesTkbjEJBb8tWDdiO4XYZT52memDz5VITORH6Ingb5TtTMZ-Wi8Ab0IBTLg=s85'
    }
  ]
} 