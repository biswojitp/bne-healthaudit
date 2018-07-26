package com.ha.healthauditlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ha.healthauditlog.model.ProcedureName;

public interface ProcedureNameRepository extends JpaRepository<ProcedureName,Long>{

}
