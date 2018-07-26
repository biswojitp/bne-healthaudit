package com.ha.healthauditlog.service;

import java.security.Principal;
import java.util.List;

import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ha.healthauditlog.model.User;
import com.ha.healthauditlog.model.User;

public interface UserService {
	void save(User user);

	 User findByUsername(String username);
	 
	 public String findLoggedInUsername();
	 public void autologin(String username, String password) ;

	RedirectAttributes saveSignUp(User signUp, RedirectAttributes attributes, Principal principal);

	List<User> findAllUser();
}
