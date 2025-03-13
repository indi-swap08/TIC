//package com.solution.ts.security;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .authorizeRequests()
//                .antMatchers("/h2-console/**").permitAll() // Allow access to H2 console
//                .anyRequest().authenticated() // Require authentication for other requests
//                .and()
//                .csrf().disable() // Disable CSRF for H2 console
//                .headers().frameOptions().sameOrigin(); // Allow H2 console to be displayed in a frame
//    }
//}