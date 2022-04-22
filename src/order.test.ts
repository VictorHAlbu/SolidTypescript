import Beer from "./Beer";
import Cigar from "./Cigar";
import Order from "./Order";
import Water from "./Water";

test('Calculate order subtotal ', function(){

  const order = new Order();
  order.addItem(new Cigar("Malboro", 10))
  order.addItem(new Beer("Itaivapa", 5))
  order.addItem(new Water("Crystal 300ml", 2))

  const subtotal = order.getSubtotal()

  expect(subtotal).toBe(17);
});


test('Calculate order taxes ', function(){

  const order = new Order();
  order.addItem(new Cigar("Malboro", 10))// 0.2 = 2
  order.addItem(new Beer("Itaivapa", 5))// 0.1 = 0.5
  order.addItem(new Water("Crystal 300ml", 2))// 0 = 0

  const taxes = order.getTaxes(new Date("2022-04-21"))

  expect(taxes).toBe(2.5);
});

test('Calculate order holida taxes ', function(){

  const order = new Order();
  order.addItem(new Cigar("Malboro", 10))
  order.addItem(new Beer("Itaivapa", 5))
  order.addItem(new Water("Crystal 300ml", 2))

  const taxes = order.getTaxes(new Date("2022-01-21"))

  expect(taxes).toBe(1.5);
});

test('Calculate order total ', function(){

  const order = new Order();
  order.addItem(new Cigar("Malboro", 10))// 0.2 = 2
  order.addItem(new Beer("Itaivapa", 5))// 0.1 = 0.5
  order.addItem(new Water("Crystal 300ml", 2))// 0 = 0

  const total = order.getTotal(new Date("2022-04-21"));

  expect(total).toBe(19.5)
});