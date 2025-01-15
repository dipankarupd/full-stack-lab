package com.test.exam;

import org.springframework.context.ApplicationContext;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamApplication implements CommandLineRunner {

	private final ApplicationContext context;

	public ExamApplication(ApplicationContext context) {
		this.context = context;
	}

	public static void main(String[] args) {
		SpringApplication.run(ExamApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Order order = context.getBean(Order.class);
		order.display();
	}

}
