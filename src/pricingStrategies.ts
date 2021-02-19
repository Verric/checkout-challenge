import { PricingPlan,Item } from './types';

export class RegularPricing implements PricingPlan {
  calculateTotal(items: Item[]) {
    return items.reduce((total,current) => total+(current.price/100),0) 
  }
}

export class MicrosoftPricing implements PricingPlan {
    calculateTotal(items: Item[]) {
        
        const smallPizzas = items.filter(item => item.name === 'Small Pizza')
        const price = !!smallPizzas.length ?smallPizzas[0].price : 0
        const numberOfDeals:number = Math.trunc(smallPizzas.length /3)
        const discount:number = numberOfDeals * price
      
        const subtotal = items.reduce((total, current) => total + (current.price), 0)
        return (subtotal - discount)/100
  }
}

export class AmazonPricing implements PricingPlan {
  calculateTotal(items: Item[]) {
    return items.reduce((total,current) => total+current.price,0) 
  }
}