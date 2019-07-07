package com.test.cucumber.load;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoadStepDefinations {

	@Given("^Close trailer with OrgID \"([^\"]*)\" and TrailerNum \"([^\"]*)\"$")
	public void close_trailer_with_OrgID_and_TrailerNum(String arg1, String arg2) throws Throwable {
	   System.out.println("Load-Given-01");
	}

	@When("^Trailer Close is successful$")
	public void trailer_Close_is_successful() throws Throwable {
		 System.out.println("Load-When-01");
	}

	@Then("^Trailer status should be Temporary Close on TMS-Dock Loading Status screen\\.$")
	public void trailer_status_should_be_Temporary_Close_on_TMS_Dock_Loading_Status_screen() throws Throwable {
		 System.out.println("Load-Then-01");
	}

	@Given("^End Sort with OrgID \"([^\"]*)\"$")
	public void end_Sort_with_OrgID(String arg1) throws Throwable {
		 System.out.println("Load-Given-02");
	}

	@When("^End Sort is successful$")
	public void end_Sort_is_successful() throws Throwable {
		 System.out.println("Load-When-02");
	}

	@Then("^Sort for OrgId must end$")
	public void sort_for_OrgId_must_end() throws Throwable {
		 System.out.println("Load-Then-02");
	}

}
