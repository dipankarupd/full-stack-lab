package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Db;

@RestController
public class DbService {
    private final Db db;

    public DbService(Db db) {
        this.db = db;
    }

    @GetMapping("/db")
    public String getConnection() {
        return db.connect();
    }
}
