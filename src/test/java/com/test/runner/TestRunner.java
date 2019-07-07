package com.test.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome=true,
		snippets=SnippetType.CAMELCASE,
		features = "src/test/resources", 
		glue = {"com.test.cucumber.load","com.test.cucumber.unload","com.test.cucumber.addscan" },
		plugin = {"html:target/cucumber-html-report","json:target/cucumber.json" }
		)
public class TestRunner {

}
