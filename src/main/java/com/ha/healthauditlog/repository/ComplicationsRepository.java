package com.ha.healthauditlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ha.healthauditlog.model.Complications;

public interface ComplicationsRepository extends JpaRepository<Complications,Long>{

	
	@Query("FROM Complications WHERE complicationId=:complicationId")
	Complications findOne(@Param("complicationId")Long complicationId);
}
