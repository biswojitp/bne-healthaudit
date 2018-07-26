package com.ha.healthauditlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.ha.healthauditlog.model.PatientDetails;

public interface PatientDetailsRepository extends JpaRepository<PatientDetails,Long>{

	@Query("FROM PatientDetails WHERE patientId=:patientId")
	PatientDetails findOne(@Param("patientId") Long patientId);

}
