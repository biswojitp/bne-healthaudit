package com.ha.healthauditlog.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;


@Entity
@Table(name="t_patientcomplication")
public class PatientComplicationDetails implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GenericGenerator(name="id",strategy="increment")
	@GeneratedValue(generator="id")
	
	@Column(name="patient_id")
	private Long patientId;

	/*@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="complication_id")
	private Complications complications;*/

	@Column(name="first_name")
	private String firstName;
	 
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="clinic_name")
	private String clinicName;
	
	@Column(name="email")
	private String email;
	
	@Column(name="mobile")
	private String mobile;
	
	@Column(name="dob")
	private Date dob;
	
	@Column(name="doc")
	private Date doc;
	
	@Column(name="next_doc")
	private Date nextDoc;
	
	@Column(name="referal_source")
	private String referalSource;
	
	@Column(name="no_of_child")
	private String noOfChild;
	
	@Column(name="current_contraception")
	private String currentContraception;
	
	
	@ManyToOne
	@JoinColumn(name="userId")
	private User user;
	
	@Column(name="dop")
	private Date dop;
	
	@Column(name="procedure_name")
	private String procedureName;
	
	@Column(name="comment")
	private String comment;
	
	@Column(name="specific_comment")
	private String specificComment;
	
	@Column(name="pre_anxiolytic")
	private String preAnxiolytic;
	
	@Column(name="allergy")
	private String allergy;
	
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

	public Long getPatientId() {
		return patientId;
	}

	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getClinicName() {
		return clinicName;
	}

	public void setClinicName(String clinicName) {
		this.clinicName = clinicName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Date getDoc() {
		return doc;
	}

	public void setDoc(Date doc) {
		this.doc = doc;
	}

	public Date getNextDoc() {
		return nextDoc;
	}

	public void setNextDoc(Date nextDoc) {
		this.nextDoc = nextDoc;
	}

	public String getReferalSource() {
		return referalSource;
	}

	public void setReferalSource(String referalSource) {
		this.referalSource = referalSource;
	}

	public String getNoOfChild() {
		return noOfChild;
	}

	public void setNoOfChild(String noOfChild) {
		this.noOfChild = noOfChild;
	}

	public String getCurrentContraception() {
		return currentContraception;
	}

	public void setCurrentContraception(String currentContraception) {
		this.currentContraception = currentContraception;
	}

	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getDop() {
		return dop;
	}

	public void setDop(Date dop) {
		this.dop = dop;
	}

	public String getProcedureName() {
		return procedureName;
	}

	public void setProcedureName(String procedureName) {
		this.procedureName = procedureName;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getSpecificComment() {
		return specificComment;
	}

	public void setSpecificComment(String specificComment) {
		this.specificComment = specificComment;
	}

	public String getPreAnxiolytic() {
		return preAnxiolytic;
	}

	public void setPreAnxiolytic(String preAnxiolytic) {
		this.preAnxiolytic = preAnxiolytic;
	}

	public String getAllergy() {
		return allergy;
	}

	public void setAllergy(String allergy) {
		this.allergy = allergy;
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

	public String getHematospermia() {
		return hematospermia;
	}

	public void setHematospermia(String hematospermia) {
		this.hematospermia = hematospermia;
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
