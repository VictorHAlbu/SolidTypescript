"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
const Order_1 = __importDefault(require("./Order"));
test('Calculate order subtotal ', function () {
    const order = new Order_1.default();
    order.addItem(new Item_1.default("Cigar", "Malboro", 10));
    order.addItem(new Item_1.default("Beer", "Itaivapa", 5));
    order.addItem(new Item_1.default("Water", "Crystal 300ml", 2));
    const subtotal = order.getSubtotal();
    expect(subtotal).toBe(17);
});
test('Calculate order taxes ', function () {
    const order = new Order_1.default();
    order.addItem(new Item_1.default("Cigar", "Malboro", 10)); // 0.2 = 2
    order.addItem(new Item_1.default("Beer", "Itaivapa", 5)); // 0.1 = 0.5
    order.addItem(new Item_1.default("Water", "Crystal 300ml", 2)); // 0 = 0
    const taxes = order.getTaxes();
    expect(taxes).toBe(2.5);
});
test('Calculate order total ', function () {
    const order = new Order_1.default();
    order.addItem(new Item_1.default("Cigar", "Malboro", 10)); // 0.2 = 2
    order.addItem(new Item_1.default("Beer", "Itaivapa", 5)); // 0.1 = 0.5
    order.addItem(new Item_1.default("Water", "Crystal 300ml", 2)); // 0 = 0
    const total = order.getTotal();
    expect(total).toBe(19.5);
});
