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
      const discount: number = numberOfDeals * price
      console.log("DISCOUNT", discount)
      
        const subtotal = items.reduce((total, current) => total + (current.price), 0)
        return (subtotal - discount)/100
  }
}

export class AmazonPricing implements PricingPlan {
    calculateTotal(items: Item[]) {
        const foo = items.map(item => {
            if (item.name === 'Large Pizza') item.price = 29999
            return item
      })
    return foo.reduce((total,current) => total+(current.price/100),0) 
  }
}

export class FacebookPricing implements PricingPlan {
  calculateTotal(items: Item[]) {
        const mediumPizzas = items.filter(item => item.name === 'Medium Pizza')
        const price = !!mediumPizzas.length ?mediumPizzas[0].price : 0
    const numberOfDeals: number = Math.trunc(mediumPizzas.length / 5)
    const discount: number = numberOfDeals * price
        const foo = items.map(item => {
            if (item.name === 'Large Pizza') item.price = 38999
            return item
      })
    const subtotal = foo.reduce((total, current) => total + (current.price), 0) 
    return (subtotal - discount)/100
  }
}