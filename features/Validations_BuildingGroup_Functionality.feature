@verify_building_group
Feature: A verify building group funtionality
This feature is to verify add, import and remove functionality in building group

Background: User navigates to application
		Given User navigate to application
		And User navigates to building group dialog box


Scenario: User will be able to removing building group
		Given User is in building group dailog box
		When User selects "BuildingA" building from list
		Then User clicks on remove button
		And User clicks on ok in building group dialog box
		Then User navigates back to building group dialog box
		And Verify removed building is not displayed in building group list
