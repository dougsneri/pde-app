package br.edu.riobrancofac.pdeapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @RequestMapping(value = "/test")
    public ModelAndView home(){
        return new ModelAndView("home");
        
    }

    @RequestMapping(value = "/tests/bro")
    public Object simpleJson(){

        return new LeoObject();

    }
}
