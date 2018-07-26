package com.ha.healthauditlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ha.healthauditlog.model.SampleResult;



public interface SampleResultRepository extends JpaRepository<SampleResult,Long>{

}
