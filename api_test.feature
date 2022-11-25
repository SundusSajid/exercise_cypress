@api
Feature: Verify that all the responses are captured on the website
  As a QE
  I want to verify test scenarios on the website are working
  So that the user can work properly and access all the features

  Background: SPG Login
    Given user is on the "https://reqres.in/" page


  Scenario: Check the list of users are populated on the page
    When user is on the page and hits the <Method>
      | Method    |
      | /api/users?page=2 |
    Then user should get the <response>
      | response      |
      |  200          |

  Scenario: Verify a single user is populated
    Given a user is on the oage and hits the <Method>
    |Method|
    |/api/users/2|
    Then user get the <response>
    |response|
    |200|

  Scenario: Verify if a user is not populated
    Given a user is on the oage and hits the <Method>
    |Method|
    |/api/users/23|
    Then user get the <response>
    |response|
    |404|


  Scenario: Verify all resources are listed
    Given a user is on the oage and hits the <Method>
    |Method|
    |/api/unknown|
    Then user gets the <response>
    |response|
    |200|

  Scenario: Verify a resources are listed
    Given a user is on the page and hits the <Method>
    |Method|
    |/api/unknown/2|
    Then user gets the <response>
    |response|
    |200|

  Scenario: Verify if a resource is not found
    Given a user is on the page and hits the <Method>
    |Method|
    |/api/unknown/23|
    Then user gets the <response>
    |response|
    |200|


  Scenario: Verify the user has logged in to the application successfully
    Given a user is on the page 
    And enters the "username" and "password"
    And the user is logged in successfully
    Then user gets the <response>
    |response|
    |200|


  Scenario: Verify the user has not logged in to the application successfully
    Given a user is on the page 
    And enters the "username" and "password"
    And the user is not logged in successfully
    Then user gets the <response>
    |response|
    |400|


Scenario: Verify a new user has been created
Given a user is on the page "https://reqres.in/api/register"
    And enters the "username" and "password"
    And the user is created 
    Then user gets the <response>
    |response|
    |200|
    
 

