Feature: User will be able to Activate the Load

@Load01
  Scenario Outline: Close trailer via AddScan
    Given Close trailer with OrgID "<OrgID>" and TrailerNum "<TrailerNum>"
    When Trailer Close is successful
    Then Trailer status should be Temporary Close on TMS-Dock Loading Status screen.

    Examples: 
      | OrgID | TrailerNum |
      |  0163 |     834557 |
      
      
@Load02
  Scenario Outline: End Sort via AddScan
    Given End Sort with OrgID "<OrgID>"
    When End Sort is successful
    Then Sort for OrgId must end

    Examples: 
      | OrgID |
      |  0163 |
