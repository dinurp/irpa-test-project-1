
// ----------------------------------------------------------------
//   Test menu for scenario workflow1a 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'workflow1a', 'Test workflow1a', '', function (ev) {
			var rootData_scenarios_workflow1 = ctx.dataManagers.rootData_scenarios_workflow1.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.workflow1a.start(rootData_scenarios_workflow1);
		});
	}
});

//---------------------------------------------------
// Scenario workflow1a Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: workflow1a
// ----------------------------------------------------------------
GLOBAL.scenario({ workflow1a: function(ev, sc) {
	var rootData_scenarios_workflow1 = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Write_log, GLOBAL.steps.processing);
	sc.step(GLOBAL.steps.processing, GLOBAL.steps.Write_log_1);
	sc.step(GLOBAL.steps.Write_log_1, null);
}}, ctx.dataManagers.rootData_scenarios_workflow1).setId('c2e910ef-e015-4d6d-8f25-28f67c1a7086') ;

// ----------------------------------------------------------------
//   Step: Write_log
// ----------------------------------------------------------------
GLOBAL.step({ Write_log: function(ev, sc, st) {
	var rootData_scenarios_workflow1 = sc.data;
	ctx.workflow('workflow1a', '9f8c12f7-853e-4033-b703-8918cb748668') ;
	// Write log
	ctx.log(rootData_scenarios_workflow1.inArgs, e.logIconType.Info);
	sc.endStep(); // processing
	return;
}});

// ----------------------------------------------------------------
//   Step: processing
// ----------------------------------------------------------------
GLOBAL.step({ processing: function(ev, sc, st) {
	var rootData_scenarios_workflow1 = sc.data;
	ctx.workflow('workflow1a', 'e02ffadc-02b3-41ee-b0b6-9dc6a916527b') ;
	// Set Context
	rootData_scenarios_workflow1.outArgs = ctx.json.parse('{"FirstName":"John","LastName":"Shark"}');
	sc.endStep(); // Write_log_1
	return;
}});

// ----------------------------------------------------------------
//   Step: Write_log_1
// ----------------------------------------------------------------
GLOBAL.step({ Write_log_1: function(ev, sc, st) {
	var rootData_scenarios_workflow1 = sc.data;
	ctx.workflow('workflow1a', '008cecf0-1aad-4af3-9221-94d89230995e') ;
	// Write log
	ctx.log(rootData_scenarios_workflow1.outArgs, e.logIconType.Info);
	sc.endStep(); // end Scenario
	return;
}});
