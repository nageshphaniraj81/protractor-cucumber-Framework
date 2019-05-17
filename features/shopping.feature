Feature: Validation of shopping application
 @ShoppingTesting
  Scenario Outline:  Navigation to Shopping web page
    Given I will navigate to Shopping page
    When I fill "<Name>","<Email>","<Password>" and "<BDay>"
    And I click on Submit button
    Then I see success message

   Examples:
   | Name | Email | Password | Bday |
   | Nagesh  | NageshPhaniraj@gmail.com | test123  | 30-10-1981 |