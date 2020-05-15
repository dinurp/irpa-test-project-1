
// ----------------------------------------------------------------
//   Test menu for scenario workflow1 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	//if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'workflow1', 'Test workflow1', '', function (ev) {
			var rootData_scenarios_workflow1 = ctx.dataManagers.rootData_scenarios_workflow1.create();
			rootData_scenarios_workflow1.inJSON = ctx.json.stringify( {"ID":"345677"});
			// Initialize your data here.
			GLOBAL.scenarios.workflow1.start(rootData_scenarios_workflow1);
		});
	//}
});

//---------------------------------------------------
// Scenario workflow1 Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: workflow1
// ----------------------------------------------------------------
GLOBAL.scenario({ workflow1: function(ev, sc) {
	var rootData_scenarios_workflow1 = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Set_Context, GLOBAL.steps.Call_workflow1a);
	sc.step(GLOBAL.steps.Call_workflow1a, GLOBAL.steps.Set_Context_1);
	sc.step(GLOBAL.steps.Set_Context_1, null);
}}, ctx.dataManagers.rootData_scenarios_workflow1).setId('0bf9b7c6-0797-4679-a32f-ffce61be1c2c') ;

// ----------------------------------------------------------------
//   Step: Set_Context
// ----------------------------------------------------------------
GLOBAL.step({ Set_Context: function(ev, sc, st) {
	var rootData_scenarios_workflow1 = sc.data;
	ctx.workflow('workflow1', '559c0bc9-46d0-4a25-a573-801fdbb000f5') ;
	// Set Context
	rootData_scenarios_workflow1.inArgs = ctx.json.parse(sc.data.inJSON);
	sc.endStep(); // Call_workflow1a
	return;
}});

// ----------------------------------------------------------------
//   Step: Call_workflow1a
// ----------------------------------------------------------------
GLOBAL.step({ Call_workflow1a: function(ev, sc, st) {
	var rootData_scenarios_workflow1 = sc.data;
	ctx.workflow('workflow1', '317fb71e-d960-4b66-984e-dec9d1f91afb') ;
	// Call workflow1a
	GLOBAL.scenarios.workflow1a.start(rootData_scenarios_workflow1);
	sc.endStep(); // Set_Context_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Set_Context_1
// ----------------------------------------------------------------
GLOBAL.step({ Set_Context_1: function(ev, sc, st) {
	var rootData_scenarios_workflow1 = sc.data;
	ctx.workflow('workflow1', '7b411fae-afad-4d30-b438-7a39f9170063') ;
	// Set Context
	rootData_scenarios_workflow1.outJSON = ctx.json.stringify(sc.data.outArgs);
	sc.endStep(); // end Scenario
	return;
}});
