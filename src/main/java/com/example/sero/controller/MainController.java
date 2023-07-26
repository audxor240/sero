package com.example.sero.controller;

import com.example.sero.dto.UserDto;
import com.example.sero.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String main(){
        return "index";
    }

    @RequestMapping("/auth/signUp")
    public String signUp(Model model){
        UserDto userDto = new UserDto();
        model.addAttribute("userDto", userDto);
        return "join/login_resist_form";
    }
}
