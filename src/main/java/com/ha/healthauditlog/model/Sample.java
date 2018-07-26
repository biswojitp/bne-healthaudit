package com.ha.healthauditlog.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="t_sample")
public class Sample implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GenericGenerator(name="id",strategy="increment")
	@GeneratedValue(generator="id")
	
	@Column(name="sample_id")
	private Long sampleId;
	
	@ManyToOne
	@JoinColumn(name="patient_id")
	private PatientDetails patientDetails;
	
	@Column(name="sample_date")
	private Date sampleDate;
	
	@Column(name="result1st_sample")
	private String result1stSample;
	
	@Column(name="action1st_sample")
	private String action1stSample;
	
	@Column(name="result2nd_sample")
	private String result2ndSample;
	
	@Column(name="action2nd_sample")
	private String action2ndSample;
	
	@Column(name="result3rd_sample")
	private String result3rdSample;
	
	@Column(name="action3rd_sample")
	private String action3rdSample;
	
	@Column(name="result4th_sample")
	private String result4thSample;
	
	@Column(name="action4th_sample")
	private String action4thSample;
	
	@Column(name="sample_due_date")
	private Date sampleDueDate;
	
	@Column(name="tel_sms_date")
	private Date telSmsDate;

	public Long getSampleId() {
		return sampleId;
	}

	public void setSampleId(Long sampleId) {
		this.sampleId = sampleId;
	}
	
	public PatientDetails getPatientDetails() {
		return patientDetails;
	}

	public void setPatientDetails(PatientDetails patientDetails) {
		this.patientDetails = patientDetails;
	}

	public String getAction4thSample() {
		return action4thSample;
	}

	public void setAction4thSample(String action4thSample) {
		this.action4thSample = action4thSample;
	}

	public Date getSampleDate() {
		return sampleDate;
	}

	public void setSampleDate(Date sampleDate) {
		this.sampleDate = sampleDate;
	}

	public String getResult1stSample() {
		return result1stSample;
	}

	public void setResult1stSample(String result1stSample) {
		this.result1stSample = result1stSample;
	}

	public String getAction1stSample() {
		return action1stSample;
	}

	public void setAction1stSample(String action1stSample) {
		this.action1stSample = action1stSample;
	}

	public String getResult2ndSample() {
		return result2ndSample;
	}

	public void setResult2ndSample(String result2ndSample) {
		this.result2ndSample = result2ndSample;
	}

	public String getAction2ndSample() {
		return action2ndSample;
	}

	public void setAction2ndSample(String action2ndSample) {
		this.action2ndSample = action2ndSample;
	}

	public String getResult3rdSample() {
		return result3rdSample;
	}

	public void setResult3rdSample(String result3rdSample) {
		this.result3rdSample = result3rdSample;
	}

	public String getAction3rdSample() {
		return action3rdSample;
	}

	public void setAction3rdSample(String action3rdSample) {
		this.action3rdSample = action3rdSample;
	}

	public String getResult4thSample() {
		return result4thSample;
	}

	public void setResult4thSample(String result4thSample) {
		this.result4thSample = result4thSample;
	}

	public String getAction4th_sample() {
		return action4thSample;
	}

	public void setAction4th_sample(String action4th_sample) {
		this.action4thSample = action4th_sample;
	}

	public Date getSampleDueDate() {
		return sampleDueDate;
	}

	public void setSampleDueDate(Date sampleDueDate) {
		this.sampleDueDate = sampleDueDate;
	}

	public Date getTelSmsDate() {
		return telSmsDate;
	}

	public void setTelSmsDate(Date telSmsDate) {
		this.telSmsDate = telSmsDate;
	}
	
		
}
