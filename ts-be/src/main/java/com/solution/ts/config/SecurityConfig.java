//package com.solution.ts.config;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .authorizeHttpRequests(authorize -> authorize
//                        .requestMatchers("/ticapi/h2-console/**").permitAll() // Allow access to H2 console
//                        .anyRequest().authenticated() // Require authentication for any other request
//                )
//                .csrf(AbstractHttpConfigurer::disable // Disable CSRF for H2 console
//                );
//
//        return http.build();
//    }
//}