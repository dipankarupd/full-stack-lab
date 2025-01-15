package com.example.demo;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Profile("prod")
public class ProdDb implements Db {

    @Override

    public String connect() {
        return "Connected to Prod";
    }
}
