Feature: Register user

Scenario: Register user
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Click on the Signup Login button
    When Verify 'New User Signup!' is visible
    Then Enter name and email address and click on signup button
    When Verify that 'Enter Account Information' is visible
    Then Fill details: Title, Name, Email, Password, Date of birth
    Then Select checkbox 'Sign up for our newsletter!'
    Then Select checkbox 'Receive special offers from our partners!'
    Then Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    Then Click 'Create Account button'
    When Verify that 'ACCOUNT CREATED!' is visible
    Then Click 'Continue' button
    When Verify that 'Logged in as username' is visible
    Then Click 'Delete Account' button
    When Verify that 'ACCOUNT DELETED!' is visible
    Then Click 'Continue' button again