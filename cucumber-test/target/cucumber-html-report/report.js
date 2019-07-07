$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Addscan/zAddscan.feature");
formatter.feature({
  "line": 1,
  "name": "User will be able to Activate the Dock via AddScan",
  "description": "",
  "id": "user-will-be-able-to-activate-the-dock-via-addscan",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Assign Destination to Trailer via AddScan",
  "description": "",
  "id": "user-will-be-able-to-activate-the-dock-via-addscan;assign-destination-to-trailer-via-addscan",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Addscan03"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Assign Destination \"\u003cTrailer_Dest\u003e\"  to the trailer with OrgID \"\u003cOrgID\u003e\" and Door number \"\u003cDoor_Nbr\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Destination Assignment to trailer is successful",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User should be able to see Trailer assigned to given destination at the door on TMS-Dock Loading Status screen.",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "user-will-be-able-to-activate-the-dock-via-addscan;assign-destination-to-trailer-via-addscan;",
  "rows": [
    {
      "cells": [
        "OrgID",
        "Door_Nbr",
        "Trailer_Dest"
      ],
      "line": 30,
      "id": "user-will-be-able-to-activate-the-dock-via-addscan;assign-destination-to-trailer-via-addscan;;1"
    },
    {
      "cells": [
        "0163",
        "0008",
        "0432"
      ],
      "line": 31,
      "id": "user-will-be-able-to-activate-the-dock-via-addscan;assign-destination-to-trailer-via-addscan;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Assign Destination to Trailer via AddScan",
  "description": "",
  "id": "user-will-be-able-to-activate-the-dock-via-addscan;assign-destination-to-trailer-via-addscan;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Addscan03"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Assign Destination \"0432\"  to the trailer with OrgID \"0163\" and Door number \"0008\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Destination Assignment to trailer is successful",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User should be able to see Trailer assigned to given destination at the door on TMS-Dock Loading Status screen.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0432",
      "offset": 20
    },
    {
      "val": "0163",
      "offset": 54
    },
    {
      "val": "0008",
      "offset": 77
    }
  ],
  "location": "StepDefinations.assign_Destination_to_the_trailer_with_OrgID_and_Door_number(String,String,String)"
});
formatter.result({
  "duration": 83326200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.destination_Assignment_to_trailer_is_successful()"
});
formatter.result({
  "duration": 137500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_able_to_see_Trailer_assigned_to_given_destination_at_the_door_on_TMS_Dock_Loading_Status_screen()"
});
formatter.result({
  "duration": 71600,
  "status": "passed"
});
formatter.uri("Load/Load.feature");
formatter.feature({
  "line": 1,
  "name": "User will be able to Activate the Load",
  "description": "",
  "id": "user-will-be-able-to-activate-the-load",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Close trailer via AddScan",
  "description": "",
  "id": "user-will-be-able-to-activate-the-load;close-trailer-via-addscan",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Load01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Close trailer with OrgID \"\u003cOrgID\u003e\" and TrailerNum \"\u003cTrailerNum\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Trailer Close is successful",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Trailer status should be Temporary Close on TMS-Dock Loading Status screen.",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-will-be-able-to-activate-the-load;close-trailer-via-addscan;",
  "rows": [
    {
      "cells": [
        "OrgID",
        "TrailerNum"
      ],
      "line": 10,
      "id": "user-will-be-able-to-activate-the-load;close-trailer-via-addscan;;1"
    },
    {
      "cells": [
        "0163",
        "834557"
      ],
      "line": 11,
      "id": "user-will-be-able-to-activate-the-load;close-trailer-via-addscan;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Close trailer via AddScan",
  "description": "",
  "id": "user-will-be-able-to-activate-the-load;close-trailer-via-addscan;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Load01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Close trailer with OrgID \"0163\" and TrailerNum \"834557\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Trailer Close is successful",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Trailer status should be Temporary Close on TMS-Dock Loading Status screen.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0163",
      "offset": 26
    },
    {
      "val": "834557",
      "offset": 48
    }
  ],
  "location": "LoadStepDefinations.close_trailer_with_OrgID_and_TrailerNum(String,String)"
});
formatter.result({
  "duration": 118100,
  "status": "passed"
});
formatter.match({
  "location": "LoadStepDefinations.trailer_Close_is_successful()"
});
formatter.result({
  "duration": 87400,
  "status": "passed"
});
formatter.match({
  "location": "LoadStepDefinations.trailer_status_should_be_Temporary_Close_on_TMS_Dock_Loading_Status_screen()"
});
formatter.result({
  "duration": 74100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "End Sort via AddScan",
  "description": "",
  "id": "user-will-be-able-to-activate-the-load;end-sort-via-addscan",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Load02"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "End Sort with OrgID \"\u003cOrgID\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "End Sort is successful",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Sort for OrgId must end",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "user-will-be-able-to-activate-the-load;end-sort-via-addscan;",
  "rows": [
    {
      "cells": [
        "OrgID"
      ],
      "line": 21,
      "id": "user-will-be-able-to-activate-the-load;end-sort-via-addscan;;1"
    },
    {
      "cells": [
        "0163"
      ],
      "line": 22,
      "id": "user-will-be-able-to-activate-the-load;end-sort-via-addscan;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "End Sort via AddScan",
  "description": "",
  "id": "user-will-be-able-to-activate-the-load;end-sort-via-addscan;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Load02"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "End Sort with OrgID \"0163\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "End Sort is successful",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Sort for OrgId must end",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0163",
      "offset": 21
    }
  ],
  "location": "LoadStepDefinations.end_Sort_with_OrgID(String)"
});
formatter.result({
  "duration": 102700,
  "status": "passed"
});
formatter.match({
  "location": "LoadStepDefinations.end_Sort_is_successful()"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.match({
  "location": "LoadStepDefinations.sort_for_OrgId_must_end()"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
});