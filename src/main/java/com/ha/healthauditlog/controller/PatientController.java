package com.ha.healthauditlog.controller;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.security.Principal;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import com.ha.healthauditlog.config.DataSourceConfig;
import com.ha.healthauditlog.model.Complications;
import com.ha.healthauditlog.model.PatientComplicationDetails;
import com.ha.healthauditlog.model.PatientDetails;
import com.ha.healthauditlog.model.Sample;
import com.ha.healthauditlog.service.PatientService;
import com.ha.healthauditlog.service.UserService;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.export.SimplePdfExporterConfiguration;
import net.sf.jasperreports.export.SimplePdfReportConfiguration;

@Controller
public class PatientController {
	private final Logger log = Logger.getLogger(this.getClass());
	
	@Autowired
	PatientService patientService;
	@Autowired
	UserService userService;
	@Autowired
	DataSourceConfig dataSourceConfig;
		
	@RequestMapping(value = "/patientDetails.htm", method = RequestMethod.GET)
	public ModelAndView getPatientDetails() {
		ModelAndView mav = new ModelAndView();
		mav.addObject("patientDetailsList",patientService.findAllPatientDetails()); 
		mav.addObject("userList",userService.findAllUser()); 
		mav.addObject("referalList",patientService.findAllReferal()); 
		mav.addObject("contraceptionList",patientService.findAllcontraception());
		mav.addObject("commentList",patientService.findAllComment());
		mav.addObject("noOfChildList",patientService.findAllChildList());
		mav.addObject("procedureNameList",patientService.findAllProcedureNameList());
		mav.setViewName("patientDetails");
		return mav;
		
	}
	@RequestMapping(value = "/savePatientDetails.htm", method = RequestMethod.POST)
	public RedirectView savePatientDetails(@ModelAttribute("patientDetails") PatientDetails patientDetails,
		RedirectAttributes attributes,HttpSession session ,Principal principal) {
		attributes = patientService.savePatientDetails(patientDetails, attributes, principal);
		return new RedirectView("patientDetails.htm", true);
	}
	
	@RequestMapping(value = "/patientDetails.htm", method = RequestMethod.POST)
	public ModelAndView editPatientDetails(@RequestParam("patientId")Long patientId,HttpSession session, Principal principal) {
		ModelAndView mav = new ModelAndView();
		//User user = userService.findByUsername(principal.getName());
		mav.addObject("patientDetailsList",patientService.findAllPatientDetails()); 
		mav.addObject("userList",userService.findAllUser()); 
		mav.addObject("referalList",patientService.findAllReferal()); 
		mav.addObject("contraceptionList",patientService.findAllcontraception());
		mav.addObject("commentList",patientService.findAllComment());
		mav.addObject("noOfChildList",patientService.findAllChildList());
		mav.addObject("procedureNameList",patientService.findAllProcedureNameList());
		mav.addObject("patientDetailsById",patientService.findOnePatientDetails(patientId)); 
		mav.setViewName("patientDetails");
		return mav;
    }
	@RequestMapping(value = "/sampleDetails.htm", method = RequestMethod.GET)
	public ModelAndView getSampleDetails() {
		ModelAndView mav = new ModelAndView();
		mav.addObject("patientDetailsList",patientService.findAllPatientDetails());
		mav.addObject("sampleResultList",patientService.findAllSampleResults());
		mav.addObject("sampleList",patientService.findAllSamples());
		mav.setViewName("sample");
		return mav;
		
	}
	@RequestMapping(value = "/createSample.htm", method = RequestMethod.POST)
	public RedirectView saveSampleDetails(@ModelAttribute("sample") Sample sample,
			RedirectAttributes attributes,HttpSession session ,Principal principal) {
		//System.out.println("item name "+signUp.getItemName());
		attributes = patientService.saveSampleDetails(sample, attributes, principal);
		return new RedirectView("sampleDetails.htm", true);
	}
	@RequestMapping(value = "/sampleDetails.htm", method = RequestMethod.POST)
	public ModelAndView editSampleDetails(@RequestParam("sampleId")Long sampleId,HttpSession session, Principal principal) {
		ModelAndView mav = new ModelAndView();
		//User user = userService.findByUsername(principal.getName());
		mav.addObject("patientDetailsList",patientService.findAllPatientDetails());
		mav.addObject("sampleResultList",patientService.findAllSampleResults());
		mav.addObject("sampleList",patientService.findAllSamples());
		mav.addObject("sampleDetailsById",patientService.findOneSampleDetails(sampleId)); 
		mav.setViewName("sample");
		return mav;
    }
	@RequestMapping(value = "/complicationDetails.htm", method = RequestMethod.GET)
	public ModelAndView getComplicationDetails() {
		ModelAndView mav = new ModelAndView();
		mav.addObject("complicationDetailsList",patientService.findAllComplicationDetails()); 
		mav.addObject("patientDetailsList",patientService.findAllPatientDetails()); 
		mav.setViewName("complicationsDetails");
		return mav;
	}
	
	@RequestMapping(value = "/saveComplicationDetails.htm", method = RequestMethod.POST)
	public RedirectView saveComplicationDetails(@ModelAttribute("complications") Complications complications,
			RedirectAttributes attributes,HttpSession session ,Principal principal) {
			attributes = patientService.saveComplicationDetails(complications, attributes, principal);
		return new RedirectView("complicationDetails.htm", true);
	}
	/*@RequestMapping(value = "/saveComplicationDetails.htm", method = RequestMethod.POST)
	public RedirectView saveComplicationDetails(@RequestParam("complicationId") Long complicationId,
			@RequestParam("patientDetails") PatientDetails patientDetails,
			@RequestParam("complicationSection") String complicationSection,
			@RequestParam("infection") Boolean infection,
			@RequestParam("chronicScrotalPain") String chronicScrotalPain,
			@RequestParam("painOnEjaculation") String painOnEjaculation,
			@RequestParam("hematospermia") String hematospermia,
			@RequestParam("failureVasiotomy") String failureVasiotomy,
			@RequestParam("patientPartnerPegnent") String patientPartnerPegnent,
			@RequestParam("operativeNoteDetails") String operativeNoteDetails,
			@RequestParam("antibioticPostOperativePeriod") String antibioticPostOperativePeriod,
			RedirectAttributes attributes,HttpSession session ,Principal principal) {
			attributes = patientService.saveComplicationDetails(complicationId,patientDetails,complicationSection,infection,chronicScrotalPain,painOnEjaculation, 
					hematospermia,failureVasiotomy,patientPartnerPegnent,operativeNoteDetails,antibioticPostOperativePeriod,attributes, principal);
		return new RedirectView("complicationDetails.htm", true);
	}*/
	@RequestMapping(value = "/complicationDetails.htm", method = RequestMethod.POST)
	public ModelAndView editComplicationDetails(@RequestParam("complicationId")Long complicationId,HttpSession session, Principal principal) {
		ModelAndView mav = new ModelAndView();
		//User user = userService.findByUsername(principal.getName());
		mav.addObject("complicationDetailsList",patientService.findAllComplicationDetails()); 
		mav.addObject("patientDetailsList",patientService.findAllPatientDetails()); 
		mav.addObject("complicationDetailsById",patientService.findOneComplicationDetails(complicationId)); 
		mav.setViewName("complicationsDetails");
		return mav;
    }
	@RequestMapping(value = "/patientDetailsToComplication.htm", method = RequestMethod.POST)
	public ModelAndView patientDetailsToComplication(@RequestParam("patientId")Long patientId,HttpSession session, Principal principal) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("patientDetailsById",patientService.findOnePatientDetails(patientId)); 
		mav.setViewName("complicationsDetails");
		return mav;
    }
	@RequestMapping(value = "/patientComplicationDetails.htm", method = RequestMethod.GET)
	public ModelAndView getpatientComplicationDetails() {
		ModelAndView mav = new ModelAndView();
		
		mav.addObject("patientDetailsList",patientService.findAllPatientComplicationDetails()); 
		mav.addObject("userList",userService.findAllUser()); 
		mav.addObject("referalList",patientService.findAllReferal()); 
		mav.addObject("contraceptionList",patientService.findAllcontraception());
		mav.addObject("commentList",patientService.findAllComment());
		mav.addObject("noOfChildList",patientService.findAllChildList());
		mav.addObject("procedureNameList",patientService.findAllProcedureNameList());
		mav.setViewName("patientComplicationDetails");
		return mav;
		
	}
	@RequestMapping(value = "/savePatientComplicationDetails.htm", method = RequestMethod.POST)
	public RedirectView savePatientComplicationDetails(@ModelAttribute("patientComplicationDetails") PatientComplicationDetails patientComplicationDetails,
		RedirectAttributes attributes,HttpSession session ,Principal principal) {
		attributes = patientService.savePatientComplicationDetails(patientComplicationDetails, attributes, principal);
		return new RedirectView("patientComplicationDetails.htm", true);
	}
	@RequestMapping(value = "/patientComplicationDetails.htm", method = RequestMethod.POST)
	public ModelAndView editPatientComplicationDetails(@RequestParam("patientId")Long patientId,HttpSession session, Principal principal) {
		ModelAndView mav = new ModelAndView();
		//User user = userService.findByUsername(principal.getName());
		mav.addObject("patientDetailsList",patientService.findAllPatientComplicationDetails()); 
		mav.addObject("userList",userService.findAllUser()); 
		mav.addObject("referalList",patientService.findAllReferal()); 
		mav.addObject("contraceptionList",patientService.findAllcontraception());
		mav.addObject("commentList",patientService.findAllComment());
		mav.addObject("noOfChildList",patientService.findAllChildList());
		mav.addObject("procedureNameList",patientService.findAllProcedureNameList());
		mav.addObject("patientDetailsById",patientService.findOnePatientComplicationDetails(patientId)); 
		mav.setViewName("patientComplicationDetails");
		return mav;
    }
	@RequestMapping(path = "/pdf", method = RequestMethod.GET)
	@ResponseBody
	public Object report(@RequestParam("patientId")Long patientId,HttpServletResponse response ) {

		InputStream kitchenReportStream = getClass().getResourceAsStream("/report/patientdetails.jrxml");
			JasperReport jasperReport=null;
			try {
				
				jasperReport = JasperCompileManager.compileReport(kitchenReportStream);
			} catch (JRException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
		}
		
		JasperPrint jasperPrint=null;
		try {
				Map<String, Object> parameters = new HashMap<>();
				parameters.put("nhPatientId", patientId);
			
				jasperPrint = JasperFillManager.fillReport(
				jasperReport, parameters, dataSourceConfig.dataSource().getConnection());
			
		} catch (JRException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		JRPdfExporter exporter = new JRPdfExporter();
		 
		exporter.setExporterInput(new SimpleExporterInput(jasperPrint));
		exporter.setExporterOutput(
		  new SimpleOutputStreamExporterOutput("patients.pdf"));
		 
		SimplePdfReportConfiguration reportConfig
		  = new SimplePdfReportConfiguration();
		reportConfig.setSizePageToContent(true);
		reportConfig.setForceLineBreakPolicy(false);
		 
		SimplePdfExporterConfiguration exportConfig
		  = new SimplePdfExporterConfiguration();
		exportConfig.setMetadataAuthor("baeldung");
		exportConfig.setEncrypted(true);
		exportConfig.setAllowedPermissionsHint("PRINTING");
		exporter.setConfiguration(reportConfig);
		exporter.setConfiguration(exportConfig);
		
		 
		try {
			exporter.exportReport();
		} catch (JRException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		 	response.setContentType("application/x-pdf");
	        response.setHeader("Content-disposition", "inline;filename=" + "patient.pdf");

	        OutputStream outStream;
			try {
				outStream = response.getOutputStream();
			
	        exporter.setExporterOutput(new SimpleOutputStreamExporterOutput(outStream));
	       // exporter.setParameter(JRExporterParameter.OUTPUT_STREAM, outStream);
	        
				exporter.exportReport();
			} catch (JRException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return null;
	}
	
}
