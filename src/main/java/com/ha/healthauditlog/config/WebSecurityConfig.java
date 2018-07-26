package com.ha.healthauditlog.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@Order(1)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
 /*@Autowired
 private UserDetailsService userDetailsService;
*/
	@Autowired
	private AuthProvider authProvider;
	
	 @Autowired
     @Qualifier("userDetailsServiceImpl")
     UserDetailsService userDetailsService;
 @Override
 protected void configure(HttpSecurity http) throws Exception {
 http
 .authorizeRequests()
 .antMatchers("/resources/**", "/signup.htm").permitAll()
 .anyRequest().authenticated()
 .and()
 .formLogin()
 .loginPage("/login").permitAll()
  .and()
 .logout()
 .permitAll();
 
 
 /*http
 .authorizeRequests()
     .anyRequest().authenticated();

//There is a custom "/login" page specified by loginPage(), and everyone 
//is allowed to view it.      
 http
     .formLogin()
         .loginPage("/login")
         .permitAll()
         .and()
     .logout()
         .permitAll();*/
 }
 
@Bean
 @Override
 public AuthenticationManager authenticationManagerBean() throws Exception {
     return super.authenticationManagerBean();
 }
 
 @Override
 protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	 
	 auth.authenticationProvider(authProvider);
	 
	 System.out.println("in config auth...............");
	 //auth.userDetailsService(userDetailsService);
	 PasswordEncoder encoder =
		     PasswordEncoderFactories.createDelegatingPasswordEncoder();
		//TODO: LOAD USERS FROM DB HERE (use file UserService.java)
     auth.inMemoryAuthentication().withUser("user1").password(encoder.encode("password1")).roles("USER, ADMIN")
         .and()
         .withUser("test555").password(encoder.encode("test555")).roles("USER");
 }
 
 /*@Override
 public UserDetailsService userDetailsServiceBean() {
	 System.out.println("in u service bean................");
	 
     return userDetailsService;
 }*/
 
/*@Bean
 public UserDetailsService userDetailsServiceBean() throws Exception {
     return super.userDetailsServiceBean();
 }*/

 /*@Autowired
 public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
 auth.userDetailsService(userDetailsService);
 }*/
}
