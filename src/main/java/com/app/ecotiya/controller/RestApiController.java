package com.app.ecotiya.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RestApiController {
    @GetMapping("/")
    public String index() {
        return "forward:/index.html";
    }
}
