# TSDX User Guide

Congrats! You just saved yourself hours of work by bootstrapping this project with TSDX. Let’s get you oriented with what’s here and how to use it.

### Usage

- `git clone git@github.com:Verric/checkout-challenge.git`
- `yarn install`
- `yarn test`

### Approach

Here we decided to the strategy pattern to allow us to inject and method of calculating discounts at runtime, without bloating the main checkout class.
![UML](https://res.cloudinary.com/b0bd0l3/image/upload/v1613864809/UML_1.png)

We also decided to make the `calculateTotal` a pure function that handles calculating the price of the order.

Pro's include;

- Completely isolated logic in-between calculating different customers discounts.
- New customers discount policies can be added with affecting any previous discount policy
- Each discount policy can be individually updated or scrapped.
- Interface method is a pure function. Any messy within the `calculateTotal` function can not affect other parts of the system.

Con's include:

- Each discount policy must baked into the system at compile time.
- The number of discount classes can sky rocket depending on how many customers the system has.
- Each pricing policy is a pure function of the `Item[]` data class. Any changes to the `Item` class we require changes to way in which discounts are calculated in each class

### Looking forward.

In a real world scenario a more fleshed out `Checkout` module would be required. While this challenge correctly handles all test casts requested. It does not handle other system requirements such as being to report on how many discounts were applied, the name of those discounts and how much was discounted on an order or line item.
