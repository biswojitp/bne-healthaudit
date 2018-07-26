package com.ha.healthauditlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.ha.healthauditlog.model.Sample;

public interface SampleRepository extends JpaRepository<Sample,Long>{

	@Query("FROM Sample WHERE sampleId=:sampleId")
	Sample findOneSample(@Param("sampleId")Long sampleId);
	
	}
