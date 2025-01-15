package com.test.exam.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.test.exam.Order;
import com.test.exam.Product;

@Configuration
public class AppConfig {

    @Bean
    public Product product() {
        return new Product(0, "Product 1");
    }

    @Bean
    public Order order(Product product) {
        return new Order(product);
    }
}
