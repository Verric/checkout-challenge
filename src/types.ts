export interface Item {
  name: string
  description: string
  price: number
}

export interface PricingPlan {
  calculateTotal: (items: Item[]) => number
}