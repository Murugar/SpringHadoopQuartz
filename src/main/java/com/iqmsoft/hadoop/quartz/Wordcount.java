
package com.iqmsoft.hadoop.quartz;

import java.util.Scanner;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Wordcount {

	private static final Log log = LogFactory.getLog(Wordcount.class);

	public static void main(String[] args) throws Exception {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext(
				"/META-INF/spring/application-context.xml", Wordcount.class);
		log.info("Spring Quartz Scheduling Application Running");
		context.registerShutdownHook();
		Scanner scanIn = new Scanner(System.in);
	    scanIn.nextLine();
	}
}
