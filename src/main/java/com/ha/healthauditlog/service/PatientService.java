package com.ha.healthauditlog.service;

import java.security.Principal;
import java.util.List;

import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ha.healthauditlog.model.Comment;
import com.ha.healthauditlog.model.Complications;
import com.ha.healthauditlog.model.Contraception;
import com.ha.healthauditlog.model.NoOfChild;
import com.ha.healthauditlog.model.PatientComplicationDetails;
import com.ha.healthauditlog.model.PatientDetails;
import com.ha.healthauditlog.model.ProcedureName;
import com.ha.healthauditlog.model.Referal;
import com.ha.healthauditlog.model.Sample;
import com.ha.healthauditlog.model.SampleResult;
import com.ha.healthauditlog.model.User;

public interface PatientService {

	RedirectAttributes saveSignUp(User signUp, RedirectAttributes attributes, Principal principal);

	List<PatientDetails> findAllPatientDetails();

	RedirectAttributes saveSampleDetails(Sample sample, RedirectAttributes attributes, Principal principal);

	RedirectAttributes savePatientDetails(PatientDetails patientDetails, RedirectAttributes attributes,
			Principal principal);

	

	List<Referal> findAllReferal();

	List<Contraception> findAllcontraception();

	List<Comment> findAllComment();

	PatientDetails findOnePatientDetails(Long patientId);

	List<Complications> findAllComplicationDetails();

	RedirectAttributes saveComplicationDetails(Complications complications, RedirectAttributes attributes,
			Principal principal);

	Complications findOneComplicationDetails(Long complicationId);

	List<SampleResult> findAllSampleResults();

	List<NoOfChild> findAllChildList();

	List<ProcedureName> findAllProcedureNameList();

	RedirectAttributes savePatientComplicationDetails(PatientComplicationDetails patientComplicationDetails,
			RedirectAttributes attributes, Principal principal);

	PatientComplicationDetails findOnePatientComplicationDetails(Long patientId);

	List<PatientComplicationDetails> findAllPatientComplicationDetails();

	Sample findOneSampleDetails(Long sampleId);

	List<Sample> findAllSamples();

}
