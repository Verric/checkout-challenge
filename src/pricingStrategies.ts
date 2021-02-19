import { PricingPlan,Item } from './types';

export class RegularPricing implements PricingPlan {
  calculateTotal(items: Item[]) {
    return items.reduce((total,current) => total+(current.price/100),0) 
  }
}

export class MicrosoftPricing implements PricingPlan {
    calculateTotal(items: Item[]) {
      let discount:number = 0
        const smallPizzas = items.filter(item => item.name === 'Small Pizza')
        const foo:number = Math.trunc(smallPizzas.length /3)
        discount = foo * 26999
      
        const subtotal = items.reduce((total, current) => total + (current.price), 0)
        return (subtotal - discount)/100
  }
}

export class AmazonPricing implements PricingPlan {
  calculateTotal(items: Item[]) {
    return items.reduce((total,current) => total+current.price,0) 
  }
}