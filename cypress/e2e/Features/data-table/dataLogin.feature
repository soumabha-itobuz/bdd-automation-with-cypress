Feature: User Login

  Scenario Outline: Successful login with different credentials
    Given I open the login page
    When I fill in the following credentials:
      | username | password  |
      | soumabha+95@itobuz.com   | Itobuz |
    #   | user2    | password2 |
    #   | user3    | password3 |
    Then I should see the dashboard page

