$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Discovery.feature");
formatter.feature({
  "line": 2,
  "name": "Discovery Feature Validation",
  "description": "",
  "id": "discovery-feature-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RunDiscovery"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate Discovery VIdeos URL with in My Account",
  "description": "",
  "id": "discovery-feature-validation;validate-discovery-videos-url-with-in-my-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the URL \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on Button \"Enter_Serengeti\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Button \"Watch_Now\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on Button \"Show_More\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select a List of Values \"Episode_List\" based on attribute \"button\":",
  "rows": [
    {
      "cells": [
        "VIDEO_LIST"
      ],
      "line": 11
    },
    {
      "cells": [
        "EPISODE 2"
      ],
      "line": 12
    },
    {
      "cells": [
        "EPISODE 3"
      ],
      "line": 13
    },
    {
      "cells": [
        "EPISODE 4"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Button \"Svg_Menu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on Button \"My_Videos\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "ScrollDown",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Validate the List \"Video_Name\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "discovery-feature-validation;validate-discovery-videos-url-with-in-my-account;",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 21,
      "id": "discovery-feature-validation;validate-discovery-videos-url-with-in-my-account;;1"
    },
    {
      "cells": [
        "URL"
      ],
      "line": 22,
      "id": "discovery-feature-validation;validate-discovery-videos-url-with-in-my-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19612634000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate Discovery VIdeos URL with in My Account",
  "description": "",
  "id": "discovery-feature-validation;validate-discovery-videos-url-with-in-my-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RunDiscovery"
    },
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the URL \"URL\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on Button \"Enter_Serengeti\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Button \"Watch_Now\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on Button \"Show_More\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select a List of Values \"Episode_List\" based on attribute \"button\":",
  "rows": [
    {
      "cells": [
        "VIDEO_LIST"
      ],
      "line": 11
    },
    {
      "cells": [
        "EPISODE 2"
      ],
      "line": 12
    },
    {
      "cells": [
        "EPISODE 3"
      ],
      "line": 13
    },
    {
      "cells": [
        "EPISODE 4"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Button \"Svg_Menu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on Button \"My_Videos\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "ScrollDown",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Validate the List \"Video_Name\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 16
    }
  ],
  "location": "Discovery_Step_Definition.launch_the_URL(String)"
});
formatter.result({
  "duration": 15527570500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter_Serengeti",
      "offset": 17
    }
  ],
  "location": "Discovery_Step_Definition.click_on_Button(String)"
});
formatter.result({
  "duration": 10280175100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Watch_Now",
      "offset": 17
    }
  ],
  "location": "Discovery_Step_Definition.click_on_Button(String)"
});
formatter.result({
  "duration": 7865122200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show_More",
      "offset": 17
    }
  ],
  "location": "Discovery_Step_Definition.click_on_Button(String)"
});
formatter.result({
  "duration": 1649107800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Episode_List",
      "offset": 25
    },
    {
      "val": "button",
      "offset": 59
    }
  ],
  "location": "Discovery_Step_Definition.select_a_List_of_Values_based_on_attribute(String,String,DataTable)"
});
formatter.result({
  "duration": 7919060900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Svg_Menu",
      "offset": 17
    }
  ],
  "location": "Discovery_Step_Definition.click_on_Button(String)"
});
formatter.result({
  "duration": 673625100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My_Videos",
      "offset": 17
    }
  ],
  "location": "Discovery_Step_Definition.click_on_Button(String)"
});
formatter.result({
  "duration": 674026900,
  "status": "passed"
});
formatter.match({
  "location": "Discovery_Step_Definition.scrolldown()"
});
formatter.result({
  "duration": 1251028900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video_Name",
      "offset": 19
    }
  ],
  "location": "Discovery_Step_Definition.validate_the_List(String)"
});
formatter.result({
  "duration": 2838891100,
  "status": "passed"
});
});