interface Item {
  name: string
  description: string
  price: number
}

interface PricingPlan {
  calculateTotal: (items: Item[]) => number
}

class RegularPricing implements PricingPlan {
  calculateTotal(items: Item[]) {
    return items.reduce((total,current) => total+current.price,0) 
  }
}

class MicrosoftPricing implements PricingPlan {
  calculateTotal(items: Item[]) {
    return items.reduce((total,current) => total+current.price,0) 
  }
}

class AmazonPricing implements PricingPlan {
  calculateTotal(items: Item[]) {
    return items.reduce((total,current) => total+current.price,0) 
  }
}

class Checkout {

  private pricingPlan: PricingPlan
  private items: Item[]
  private formatter: Intl.NumberFormat

  constructor(plan:PricingPlan, currency:string='AUD') {
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