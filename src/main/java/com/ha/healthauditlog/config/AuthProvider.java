package com.ha.healthauditlog.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Component("authProvider")
public class AuthProvider implements AuthenticationProvider {




@Autowired
@Qualifier("userDetailsServiceImpl")
UserDetailsService userDetailsService;


@Override
public Authentication authenticate(Authentication auth)
        throws AuthenticationException {

    String username = auth.getName();
    String password = auth.getCredentials().toString();
    System.out.println(username + " " + password);

    UserDetails user = userDetailsService.loadUserByUsername(username);
    System.out.println(user);
    if(user != null){

        Authentication token = new UsernamePasswordAuthenticationToken(username, password, user.getAuthorities());

        return token;
    }
    return null;
}

@Override
public boolean supports(Class<?> arg0) {
    // TODO Auto-generated method stub
    return false;
}

}