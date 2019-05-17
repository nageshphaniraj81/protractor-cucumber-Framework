Feature: Validation of calculator application

  @CalculatorTesting
  Scenario Outline:  Calculator add functionality
    Given I will navigate to calc site
    When when I add "<num1>" and "<num2>"
    Then result displayed should be "<Results>"

    Examples:
    | num1| num2 | Results |
    | 5  | 5  | 10  |
    | 55  | 55  | 110 |
    | 7  | 3  | 10  |
    | 25  | 50  | 75  |

  @CalculatorTesting
  Scenario Outline:  Calculator subtraction functionality
    Given I will navigate to calc site
    When when I subtract "<num1>" and "<num2>"
    Then result displayed should be "<Results>"

    Examples:
    | num1| num2 | Results |
    | 5  | 5  | 0  |
    | 55  | 55  | 0  |
    | 7  | 3  | 4  |
    | 250  | 50  | 200  |

  @CalculatorTesting
  Scenario: Calculator Division functionality
    Given I will navigate to calc site
    When when I divide "10" and "2"
    Then result displayed should be "5"