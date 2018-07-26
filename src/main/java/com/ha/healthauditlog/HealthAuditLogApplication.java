package com.ha.healthauditlog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class HealthAuditLogApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(HealthAuditLogApplication.class);
    }

	public static void main(String[] args) {
		SpringApplication.run(HealthAuditLogApplication.class, args);
		System.out.println("HealthAudit App Started");
	}
}

/*public class HealthAuditLogApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthAuditLogApplication.class, args);
		System.out.println("HealthAudit App Started");
	}
}*/


