package com.ha.healthauditlog.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="t_patient_procedurename")
public class ProcedureName implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GenericGenerator(name="id",strategy="increment")
	@GeneratedValue(generator="id")
	
	@Column(name="procedurename_id")
	private Long procedurenameId;
	
	@Column(name="procedure_name")
	private String procedureName;

	public Long getProcedurenameId() {
		return procedurenameId;
	}

	public void setProcedurenameId(Long procedurenameId) {
		this.procedurenameId = procedurenameId;
	}

	public String getProcedureName() {
		return procedureName;
	}

	public void setProcedureName(String procedureName) {
		this.procedureName = procedureName;
	}
	
	

}
