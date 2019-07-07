package com.test.cucumber.addscan;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinations {

	@Given("^OrgID \"([^\"]*)\" and sortType \"([^\"]*)\" and dockName \"([^\"]*)\" entered for Loading Dock Activation$")
	public void orgid_and_sortType_and_dockName_entered_for_Loading_Dock_Activation(String arg1, String arg2, String arg3) throws Throwable {
		 System.out.println("Addscan-Given");
	}

	@When("^Dock Activation is successful$")
	public void dock_Activation_is_successful() throws Throwable {
		 System.out.println("Addscan-When");
	}

	@Then("^User is able to view Activated Dock on TMS-Dock Loading Status screen$")
	public void user_is_able_to_view_Activated_Dock_on_TMS_Dock_Loading_Status_screen() throws Throwable {
		System.out.println("Addscan-Then");
	}

	@Given("^OrgID \"([^\"]*)\" and Door number \"([^\"]*)\" and TrailerNum \"([^\"]*)\" assigned to the trailer$")
	public void orgid_and_Door_number_and_TrailerNum_assigned_to_the_trailer(String arg1, String arg2, String arg3) throws Throwable {
		System.out.println("Addscan-Given orgid");
	}

	@When("^Door Assignment to trailer is successful$")
	public void door_Assignment_to_trailer_is_successful() throws Throwable {
		System.out.println("Addscan-When");
	}

	@Then("^Trailer should be in Loading status on TMS-Dock Loading Status screen\\.$")
	public void trailer_should_be_in_Loading_status_on_TMS_Dock_Loading_Status_screen() throws Throwable {
		 System.out.println();
	}

	@Given("^Assign Destination \"([^\"]*)\"  to the trailer with OrgID \"([^\"]*)\" and Door number \"([^\"]*)\"$")
	public void assign_Destination_to_the_trailer_with_OrgID_and_Door_number(String arg1, String arg2, String arg3) throws Throwable {
		System.out.println("Addscan-Given-03");
	}

	@When("^Destination Assignment to trailer is successful$")
	public void destination_Assignment_to_trailer_is_successful() throws Throwable {
		System.out.println("Addscan-When trailer-03");
	}

	@Then("^User should be able to see Trailer assigned to given destination at the door on TMS-Dock Loading Status screen\\.$")
	public void user_should_be_able_to_see_Trailer_assigned_to_given_destination_at_the_door_on_TMS_Dock_Loading_Status_screen() throws Throwable {
		System.out.println("Addscan-Then see-03");
	}
}
