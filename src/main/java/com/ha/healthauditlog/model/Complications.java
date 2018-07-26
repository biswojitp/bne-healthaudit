package com.ha.healthauditlog.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;


@Entity
@Table(name="t_complication")

public class Complications implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GenericGenerator(name="id",strategy="increment")
	@GeneratedValue(generator="id")
	
	@Column(name="complication_id")
	private Long complicationId;
	
	/*@ManyToOne
	@JoinColumn(name="patient_id")
	private PatientDetails patientDetails;
*/	
	@Column(name="complication_section")
	private String complicationSection;
	
	@Column(name="infection")
	private Boolean infection;
	
	@Column(name="chronic_scrotal_pain")
	private String chronicScrotalPain;
	
	@Column(name="pain_on_ejaculation")
	private String painOnEjaculation;
	
	@Column(name="haematospermia")
	private String hematospermia;
	
	@Column(name="failure_vasiotomy")
	private String failureVasiotomy;
	
	@Column(name="patient_partner_pegnent")
	private String patientPartnerPegnent;
	
	@Column(name="operative_note_details")
	private String operativeNoteDetails;
	
	@Column(name="antibiotic_post_operative_period")
	private String antibioticPostOperativePeriod;
	
	@Column(name="vasovagal")
	private String vasovagal;
	
	@Column(name="description")
	private String description;

	public Long getComplicationId() {
		return complicationId;
	}

	public void setComplicationId(Long complicationId) {
		this.complicationId = complicationId;
	}

	public String getComplicationSection() {
		return complicationSection;
	}

	public void setComplicationSection(String complicationSection) {
		this.complicationSection = complicationSection;
	}

	public Boolean getInfection() {
		return infection;
	}

	public void setInfection(Boolean infection) {
		this.infection = infection;
	}

	public String getChronicScrotalPain() {
		return chronicScrotalPain;
	}

	public void setChronicScrotalPain(String chronicScrotalPain) {
		this.chronicScrotalPain = chronicScrotalPain;
	}

	public String getPainOnEjaculation() {
		return painOnEjaculation;
	}

	public void setPainOnEjaculation(String painOnEjaculation) {
		this.painOnEjaculation = painOnEjaculation;
	}

	public String getHaematospermia() {
		return hematospermia;
	}

	public void setHaematospermia(String haematospermia) {
		this.hematospermia = haematospermia;
	}

	public String getFailureVasiotomy() {
		return failureVasiotomy;
	}

	public void setFailureVasiotomy(String failureVasiotomy) {
		this.failureVasiotomy = failureVasiotomy;
	}

	public String getPatientPartnerPegnent() {
		return patientPartnerPegnent;
	}

	public void setPatientPartnerPegnent(String patientPartnerPegnent) {
		this.patientPartnerPegnent = patientPartnerPegnent;
	}

	public String getOperativeNoteDetails() {
		return operativeNoteDetails;
	}

	public void setOperativeNoteDetails(String operativeNoteDetails) {
		this.operativeNoteDetails = operativeNoteDetails;
	}

	public String getAntibioticPostOperativePeriod() {
		return antibioticPostOperativePeriod;
	}

	public void setAntibioticPostOperativePeriod(String antibioticPostOperativePeriod) {
		this.antibioticPostOperativePeriod = antibioticPostOperativePeriod;
	}

	public String getVasovagal() {
		return vasovagal;
	}

	public void setVasovagal(String vasovagal) {
		this.vasovagal = vasovagal;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
