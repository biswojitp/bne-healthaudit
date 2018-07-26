package com.ha.healthauditlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ha.healthauditlog.model.User;


public interface SignUpRepository extends JpaRepository<User, Long>{

}
