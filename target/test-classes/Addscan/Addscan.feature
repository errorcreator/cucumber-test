Feature: User will be able to Activate the Dock via AddScan

@Addscan01
  Scenario Outline: Activate the Dock via AddScan
    Given OrgID "<OrgID>" and sortType "<sortType>" and dockName "<dockName>" entered for Loading Dock Activation
    When Dock Activation is successful
    Then User is able to view Activated Dock on TMS-Dock Loading Status screen

    Examples: 
      | OrgID | sortType | dockName |
      |  0163 | OB       | OB       |

@Addscan02
  Scenario Outline: Door Assignment via AddScan
    Given OrgID "<OrgID>" and Door number "<Door_Nbr>" and TrailerNum "<TrailerNum>" assigned to the trailer
    When Door Assignment to trailer is successful
    Then Trailer should be in Loading status on TMS-Dock Loading Status screen.

    Examples: 
      | OrgID | Door_Nbr | TrailerNum |
      |  0163 |     0008 |     834557 |
      
 @Addscan03
  Scenario Outline: Assign Destination to Trailer via AddScan
    Given Assign Destination "<Trailer_Dest>"  to the trailer with OrgID "<OrgID>" and Door number "<Door_Nbr>"
    When Destination Assignment to trailer is successful
    Then User should be able to see Trailer assigned to given destination at the door on TMS-Dock Loading Status screen.

    Examples: 
      | OrgID | Door_Nbr | Trailer_Dest |
      |  0163 |     0008 |         0432 |
