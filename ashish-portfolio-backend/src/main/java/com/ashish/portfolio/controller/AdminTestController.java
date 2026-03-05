package com.ashish.portfolio.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminTestController {

    @GetMapping("/test")
    public String test() {
        return "Admin access granted!";
    }
}