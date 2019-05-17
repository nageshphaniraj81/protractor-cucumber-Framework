Feature: Validation of angular application
 @AngularTesting
  Scenario Outline: Scenario Outline name: Navigation to Angular JS page
    Given I will navigate to Angular page
    When I clicked on header link
    Then you will enter "<key>" in search box

    Examples:
    | key |
    | Hey  | 
    | Hello  | 
    | Hi  | 