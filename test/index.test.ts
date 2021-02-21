import { Checkout } from '../src/index';
import { Item } from '../src/types';
import {
  RegularPricing,
  MicrosoftPricing,
  AmazonPricing,
  FacebookPricing,
} from '../src/pricingStrategies';

describe('Checkout', () => {
  const smallPizza: Item = {
    name: 'Small Pizza',
    description: '10" pizza for one person',
    price: 26999,
  };
  const mediumPizza: Item = {
    name: 'Medium Pizza',
    description: '12" Pizza for two persons',
    price: 32299,
  };
  const largePizza: Item = {
    name: 'Large Pizza',
    description: '15" Pizza for four persons',
    price: 39499,
  };
  //----------------REGULAR CUSTOMER----------------------
  describe('Regular customer', () => {
    it('Challenge Test case', () => {
      //given
      const pricing = new RegularPricing();
      const checkout = new Checkout(pricing);
      //when
      checkout.add(smallPizza);
      checkout.add(mediumPizza);
      checkout.add(largePizza);
      //then
      expect(checkout.total()).toEqual('$987.97');
    });
  });
  //----------------MICROSOFT CUSTOMER----------------------
  describe('Microsoft customer', () => {
    it('should not apply any discount and correctly total the cost', () => {
      //given
      const pricing = new MicrosoftPricing();
      const checkout = new Checkout(pricing);
      //when
      checkout.add(smallPizza);
      checkout.add(mediumPizza);
      checkout.add(largePizza);
      //then
      expect(checkout.total()).toEqual('$987.97');
    });
    it('should apply a 3 for 2 deal on small pizzas', () => {
      //given
      const pricing = new MicrosoftPricing();
      const checkout = new Checkout(pricing);
      //when
      checkout.add(smallPizza);
      checkout.add(smallPizza);
      checkout.add(smallPizza);
      //then
      expect(checkout.total()).toEqual('$539.98');
    });
    it('should apply a 6 for 4 deal on small pizzas', () => {
      //given
      const pricing = new MicrosoftPricing();
      const checkout = new Checkout(pricing);
      //when
      Array.from({ length: 6 }).forEach(() => {
        checkout.add(smallPizza);
      });
      //then
      expect(checkout.total()).toEqual('$1,079.96');
    });
    it('Challenge Test case', () => {
      //given
      const pricing = new MicrosoftPricing();
      const checkout = new Checkout(pricing);
      //when
      checkout.add(smallPizza);
      checkout.add(smallPizza);
      checkout.add(smallPizza);
      checkout.add(largePizza);
      //then
      expect(checkout.total()).toEqual('$934.97');
    });
  });
  //----------------AMAZON CUSTOMER----------------------
  describe('Amazon Customer', () => {
    it('Challenge Test case', () => {
      //given
      const pricing = new AmazonPricing();
      const checkout = new Checkout(pricing);
      //when
      checkout.add(mediumPizza);
      checkout.add(mediumPizza);
      checkout.add(mediumPizza);
      checkout.add(largePizza);
      //then
      expect(checkout.total()).toEqual('$1,268.96');
    });
  });
  //----------------FACEBOOK CUSTOMER----------------------
  describe('Facebook Customer', () => {
    it('Challenge Test case', () => {
      //given
      const pricing = new FacebookPricing();
      const checkout = new Checkout(pricing);
      //when
      checkout.add(mediumPizza);
      checkout.add(mediumPizza);
      checkout.add(mediumPizza);
      checkout.add(mediumPizza);
      checkout.add(mediumPizza);
      checkout.add(largePizza);
      //then
      expect(checkout.total()).toEqual('$1,681.95');
    });
  });
});
