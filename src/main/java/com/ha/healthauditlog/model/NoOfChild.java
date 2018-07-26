package com.ha.healthauditlog.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="t_patient_child")
public class NoOfChild implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GenericGenerator(name="id",strategy="increment")
	@GeneratedValue(generator="id")
	
	@Column(name="child_id")
	private Long childId;
	
	@Column(name="no_of_child")
	private String noOfChild;

	public Long getChildId() {
		return childId;
	}

	public void setChildId(Long childId) {
		this.childId = childId;
	}

	public String getNoOfChild() {
		return noOfChild;
	}

	public void setNoOfChild(String noOfChild) {
		this.noOfChild = noOfChild;
	}

	
}
