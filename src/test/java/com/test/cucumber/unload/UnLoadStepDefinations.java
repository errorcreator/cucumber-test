package com.test.cucumber.unload;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UnLoadStepDefinations {

	
	@Given("^dockName \"([^\"]*)\" entered for Loading Dock Activation$")
	public void dockname_entered_for_Loading_Dock_Activation(String arg1) throws Throwable {
	   System.out.println("Unload-Given-01");
	}

	@When("^Dock Activation is$")
	public void dock_Activation_is() throws Throwable {
		System.out.println("Unload-When-01");
	}

	@Then("^User is able to view Dock on TMS-Dock Loading Status screen$")
	public void user_is_able_to_view_Dock_on_TMS_Dock_Loading_Status_screen() throws Throwable {
		System.out.println("Unload-Then-01");
	}

	@Given("^OrgID \"([^\"]*)\" and Door number \"([^\"]*)\"  assigned to the trailer$")
	public void orgid_and_Door_number_assigned_to_the_trailer(String arg1, String arg2) throws Throwable {
		System.out.println("Unload-Given-02");
	}

	@When("^Door unload to trailer is successful$")
	public void door_unload_to_trailer_is_successful() throws Throwable {
		System.out.println("Unload-When-02");
	}

	@Then("^Trailer should be in unload status on TMS-Dock Loading Status screen\\.$")
	public void trailer_should_be_in_unload_status_on_TMS_Dock_Loading_Status_screen() throws Throwable {
		System.out.println("Unload-Then-02");
	}
}
