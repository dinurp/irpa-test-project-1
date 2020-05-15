
//---------------------------------------------------
// Data Structures
//---------------------------------------------------
// ----------- rootData -------------------
ctx.dataManager({
	rootData :
	{
		scenarios : 
		{
			workflow1 : 
			{
				outArgs : 
				{
					FirstName : ''
					, LastName : ''
				}
				, inArgs : 
				{
					ID : ''
				}
				, inJSON : ''
				, outJSON : ''
			}
		}
	}
});
var rootData = ctx.dataManagers.rootData.create() ;

// ----------- rootData_scenarios -------------------
ctx.dataManager({
	rootData_scenarios :
	{
		workflow1 : 
		{
			outArgs : 
			{
				FirstName : ''
				, LastName : ''
			}
			, inArgs : 
			{
				ID : ''
			}
			, inJSON : ''
			, outJSON : ''
		}
	}
});
var rootData_scenarios = ctx.dataManagers.rootData_scenarios.create() ;

// ----------- rootData_scenarios_workflow1 -------------------
ctx.dataManager({
	rootData_scenarios_workflow1 :
	{
		outArgs : 
		{
			FirstName : ''
			, LastName : ''
		}
		, inArgs : 
		{
			ID : ''
		}
		, inJSON : ''
		, outJSON : ''
	}
});
var rootData_scenarios_workflow1 = ctx.dataManagers.rootData_scenarios_workflow1.create() ;

// ----------- rootData_scenarios_workflow1_outArgs -------------------
ctx.dataManager({
	rootData_scenarios_workflow1_outArgs :
	{
		FirstName : ''
		, LastName : ''
	}
});
var rootData_scenarios_workflow1_outArgs = ctx.dataManagers.rootData_scenarios_workflow1_outArgs.create() ;

// ----------- rootData_scenarios_workflow1_inArgs -------------------
ctx.dataManager({
	rootData_scenarios_workflow1_inArgs :
	{
		ID : ''
	}
});
var rootData_scenarios_workflow1_inArgs = ctx.dataManagers.rootData_scenarios_workflow1_inArgs.create() ;


//---------------------------------------------------
// Settings Structure
//---------------------------------------------------

//---------------------------------------------------
// Functional Events Declaration
//---------------------------------------------------

//---------------------------------------------------
// 
//---------------------------------------------------
