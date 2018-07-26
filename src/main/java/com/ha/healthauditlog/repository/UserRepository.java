package com.ha.healthauditlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.ha.healthauditlog.model.User;

public interface UserRepository extends JpaRepository<User,Long>{
	
	/*@Query("FROM PatientDetails WHERE patientId=:patientId")
	PatientDetails findOne(@Param("patientId") Long patientId);*/
	@Query("FROM User WHERE userName=:userName")
	User findByUsername(@Param("userName")String userName);
}
