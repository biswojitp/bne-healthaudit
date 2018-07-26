package com.ha.healthauditlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.ha.healthauditlog.model.Role;

public interface RoleRepository extends JpaRepository<Role,Long>{
	/*@Query("FROM PatientDetails WHERE patientId=:patientId")
	PatientDetails findOne(@Param("patientId") Long patientId);*/
	
	
}
