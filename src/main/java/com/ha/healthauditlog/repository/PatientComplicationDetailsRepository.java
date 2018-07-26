package com.ha.healthauditlog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ha.healthauditlog.model.PatientComplicationDetails;

public interface PatientComplicationDetailsRepository extends JpaRepository<PatientComplicationDetails,Long>{
	
	@Query("FROM PatientComplicationDetails WHERE patientId=:patientId")
	PatientComplicationDetails findOne(@Param("patientId") Long patientId);
	
	@Query("FROM PatientComplicationDetails ORDER BY patientId DESC")
	List<PatientComplicationDetails> findAllDesc();
}
