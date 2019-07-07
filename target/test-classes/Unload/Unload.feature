Feature: User will be able to Activate the Unload

@Unload01
  Scenario Outline: Activate the unLoad via AddScan
    Given  dockName "<dockName>" entered for Loading Dock Activation
    When Dock Activation is
    Then User is able to view Dock on TMS-Dock Loading Status screen

    Examples: 
      | OrgID | sortType | dockName |
      |  0163 | OB       | OB       |
      
@Unload02
  Scenario Outline: unload Assignment via AddScan
    Given OrgID "<OrgID>" and Door number "<Door_Nbr>"  assigned to the trailer
    When Door unload to trailer is successful
    Then Trailer should be in unload status on TMS-Dock Loading Status screen.

    Examples: 
      | OrgID | Door_Nbr | TrailerNum |
      |  0163 |     0008 |     834557 |

