var weather = require('weather-js');

weather.find({search: 'Central Park, NY', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.stringify(result[0].location));
});

/*
	Determines Level of Activeness based on steps
	@param steps (int)
	@return Activity_Level (String)
*/
function determineActivityLevel(steps) {
	if(steps < 5000) { return "Sedentary"; }
	else if(steps < 7499) { return "Low Activity"; }
	else if(steps < 9999) { return "Somewhat Active"; }
	else { return "Active"; }
}

/*
	Determines how many calories burned based on step count
	@param steps (int)
	@return Object with estimated # of calories burned
*/
function determineCaloriesBurned(steps) {
	// Per day for 10,000 steps
	var low_limit = 287.1/10000;
	var high_limit = 500/10000;
	return {low: low_limit*steps, high: high_limit*steps};
}

/*
	Calculates number of cups to drink per day
	@param weight (float or int)
	@param pregnant (bool)
	@param breastfeeding (bool)
	@return Object with # of cups via food, and via pure water
*/
function calculateCupsPerDay(weight,pregnant,breastfeeding) {
	var ounces = weight*0.67;
	if(pregnant) ounces+=16;
	if(breastfeeding) ounces+=40;
	// If cold, -1 cup (near or below freezing 0*F)
	// Cold (avg < 49*)
	// Warm = +1 cup
	// Very Hot = +2 cup (near or above 100*F)
	return { foodIntake: ounces/8*0.20, cups: ounces/8*0.80 };
}

// Weight * .67 = # of Cups per day
// Pregnant = +2 cups
// Breastfeeding = +5 cups
// Every 4000 steps, you add 18 ounces of water
// 