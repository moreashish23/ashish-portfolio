package com.ashish.portfolio.controller;

import com.ashish.portfolio.dto.LoginRequest;
import com.ashish.portfolio.dto.LoginResponse;
import com.ashish.portfolio.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        String token = authService.login(request);
        return new LoginResponse(token);
    }
}