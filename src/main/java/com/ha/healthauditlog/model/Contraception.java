package com.ha.healthauditlog.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="t_conrtaception")
public class Contraception implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GenericGenerator(name="id",strategy="increment")
	@GeneratedValue(generator="id")
	
	@Column(name="contraception_id")
	private Long contraceptionId;
	
	@Column(name="current_contraception")
	private String currentContraception;

	public Long getContraceptionId() {
		return contraceptionId;
	}

	public void setContraceptionId(Long contraceptionId) {
		this.contraceptionId = contraceptionId;
	}

	public String getCurrentContraception() {
		return currentContraception;
	}

	public void setCurrentContraception(String currentContraception) {
		this.currentContraception = currentContraception;
	}
	
	
}
