package com.ha.healthauditlog.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import java.security.Principal;
import java.util.HashSet;
import java.util.List;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ha.healthauditlog.model.User;
import com.ha.healthauditlog.repository.RoleRepository;
import com.ha.healthauditlog.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	
	@Autowired
	 private UserRepository userRepository;
	 @Autowired
	 private RoleRepository roleRepository;
	 @Autowired
	 private AuthenticationManager authenticationManager;
	 @Autowired
	 private UserDetailsService userDetailsService;

	 private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	 @SuppressWarnings("unchecked")
	 public void save(User user) {
	 user.setPassword(user.getPassword());
	 user.setRoles(new HashSet(roleRepository.findAll()));
	 userRepository.save(user);
	 }

	 public User findByUsername(String username) {
	 return userRepository.findByUsername(username);
	 }

	@Override
	public RedirectAttributes saveSignUp(User user, RedirectAttributes attributes, Principal principal) {
		
		userRepository.save(user);
		return null;
	}
	@Override
	public List<User> findAllUser() {
		
		return userRepository.findAll();
	}
	
    @Override
    public String findLoggedInUsername() {
        Object userDetails = SecurityContextHolder.getContext().getAuthentication().getDetails();
        if (userDetails instanceof UserDetails) {
            return ((UserDetails)userDetails).getUsername();
        }

        return null;
    }
 //   https://hellokoding.com/registration-and-login-example-with-spring-security-spring-boot-spring-data-jpa-hsql-jsp/
    @Override
    public void autologin(String username, String password) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());

        authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        if (usernamePasswordAuthenticationToken.isAuthenticated()) {
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            logger.debug(String.format("Auto login %s successfully!", username));
        }
    }
}

