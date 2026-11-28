package training.spring.communo.backend.frontendredirect;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaController {

    // Intercepte toutes les routes qui ne contiennent pas de point (ex: /profil, /dashboard)
    // tout en laissant passer les fichiers statiques (.js, .css, .png) et les routes /api/**
    @RequestMapping(value = {"/{path:[^\\.]*}", "/**/{path:[^\\.]*}"})
    public String redirect() {
        return "forward:/index.html";
    }
}