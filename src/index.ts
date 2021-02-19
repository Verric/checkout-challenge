import { PricingPlan,Item } from './types';

export class Checkout {

  private pricingPlan: PricingPlan
  private items: Item[]
  private formatter: Intl.NumberFormat

  constructor(plan:PricingPlan, currency:string='USD') {
    this.pricingPlan = plan 
    this.items = []
    this.formatter = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currency,
    })
  }

  add(item: Item):void {
    this.items.push(item)
  }

  total(): string {
    return this.formatter.format(this.pricingPlan.calculateTotal(this.items))
  }

}