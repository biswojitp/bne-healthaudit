package com.ha.healthauditlog.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="t_referal")
public class Referal implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GenericGenerator(name="id",strategy="increment")
	@GeneratedValue(generator="id")
	
	@Column(name="ref_Id")
	private Long refId;
	
	@Column(name="referal_Source")
	private String referalSource;

	public Long getRefId() {
		return refId;
	}

	public void setRefId(Long refId) {
		this.refId = refId;
	}

	public String getReferalSource() {
		return referalSource;
	}

	public void setReferalSource(String referalSource) {
		this.referalSource = referalSource;
	}
	
}
