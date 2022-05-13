package com.app.ecotiya.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RestApiController {
    @RequestMapping (value = "/")
    public String index () {
        return "index";
    }
}