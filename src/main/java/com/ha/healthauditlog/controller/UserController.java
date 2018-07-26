package com.ha.healthauditlog.controller;

import java.security.Principal;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;
import com.ha.healthauditlog.model.User;
import com.ha.healthauditlog.service.UserService;

@Controller
public class UserController {
	 @Autowired
	 private UserService userService;
	 
	 @RequestMapping("/")
		public String welcome() {
		  return "app.welcome";
		}
		@RequestMapping("/welcome")
		public String welcome1() {
		  return "app.welcome";
		}
		@RequestMapping(value = "/signup.htm", method = RequestMethod.GET)
		public String signup() {
		  return "user1";
		}
		@RequestMapping(value = "/login", method = RequestMethod.GET)
		 public String login(Model model, String error, String logout) {
		if (error != null)
		 model.addAttribute("error", "Your username and password is invalid.");

		 if (logout != null)
		 model.addAttribute("message", "You have been logged out successfully.");

		 return "index";
		 }
		/*@RequestMapping("/login")
		public String login() {
			System.out.println("I am inside login");
		  return "login";
		}*/
		@RequestMapping(value = "/signup.htm", method = RequestMethod.POST)
		public String saveDetails(@ModelAttribute("user") User user,
				RedirectAttributes attributes,HttpSession session ,Principal principal) {
			//System.out.println("item name "+signUp.getItemName());
			attributes = userService.saveSignUp(user, attributes, principal);
			
			userService.autologin(user.getUserName(), user.getPassword());

			return "app.welcome";
		}

	 /*@RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
	 public String welcome(Model model) {
	 return "home";
	 }*/
}
