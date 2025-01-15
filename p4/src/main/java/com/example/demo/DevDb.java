package com.example.demo;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Profile("dev")
public class DevDb implements Db {

    @Override
    public String connect() {
        return "Connected to Dev";
    }
}