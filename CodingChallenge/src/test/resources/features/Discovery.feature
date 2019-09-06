@RunDiscovery
Feature: Discovery Feature Validation

  @tag1
  Scenario Outline: Validate Discovery VIdeos URL with in My Account
    Given Launch the URL "<URL>"
    Then Click on Button "Enter_Serengeti"
    Then Click on Button "Watch_Now"
    Then Click on Button "Show_More"
    Then Select a List of Values "Episode_List" based on attribute "button":
      | VIDEO_LIST |
      | EPISODE 2  |
      | EPISODE 3  |
      | EPISODE 4  |
    Then Click on Button "Svg_Menu"  
    Then Click on Button "My_Videos"
    Then ScrollDown
	Then Validate the List "Video_Name"

    Examples: 
      | URL |
      | URL |
