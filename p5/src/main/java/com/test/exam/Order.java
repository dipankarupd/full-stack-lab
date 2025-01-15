package com.test.exam;

public class Order {
    private Product prod;

    public Order(Product prod) {
        this.prod = prod;
    }

    public void display() {
        System.out.println("Order placed for " + prod);
    }
}
