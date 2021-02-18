import { Item, Checkout, RegularPricing, MicrosoftPricing } from '../src/index';


describe('Checkout', () => {
  const smallPizza: Item = {
    name: 'Small Pizza',
    description: '10" pizza for one person',
    price: 26999
  }
  const mediumPizza: Item = {
    name: 'Medium Pizza',
    description: '12" Pizza for two persons',
    price: 32299
  }
  const largePizza: Item = {
    name: 'Large Pizza',
    description: '15" Pizza for four persons',
    price: 39499
  }

  describe('Regular customer', () => {
    it('should not apply any discount and correctly total the cost', () => {
      //given
      const pricing = new RegularPricing()
      const checkout = new Checkout(pricing)
      //when
      checkout.add(smallPizza)
      checkout.add(mediumPizza)
      checkout.add(largePizza)
      //then
      expect(checkout.total()).toEqual('$987.97')
    })
  })

  describe('Microsoft customer', () => {
    it('should not apply any discount and correctly total the cost', () => {
      //given
      const pricing = new MicrosoftPricing()
      const checkout = new Checkout(pricing)
      //when
      checkout.add(smallPizza)
      checkout.add(mediumPizza)
      checkout.add(largePizza)
      //then
      expect(checkout.total()).toEqual('$987.97')
    })
    it.skip('should apply a 3 for 2 deal on small pizzas', () => {

    })
  })
});
