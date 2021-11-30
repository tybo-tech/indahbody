

export interface Email {
  Type?: string;
  Email: string;
  From: string;
  Subject: string;
  Message: string;
  Link?: string;
  LinkLabel?: string;
  UserFullName?: string;
  Name?: string;
  Amount?: number;
  AmountPaid?: number;
  AmountDue?: number;
  NextBillingDate?: string;
}


export interface Product {
  Id?: string;
  Name: string;
  Price: number;
  OldPrice?: number;
  Promo?: string;
  Description: string;
  Icon: string;
  Icon2?: string;
  Icon3?: string;
  Quantity: number;
  AvailableQuantity?: number;
  Category: string;
}
export interface Order {
  Products: Product[];
  Total: number;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  Shipping: string;
  ShippingFee?: number;
}