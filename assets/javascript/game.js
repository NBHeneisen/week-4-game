var crystalCollector = {
	randGuessRange: [1,12],	//creates a range for the buttons, easily editable to make the range different.

	//the buttons and goal, using the randomNumButton function to generate random numbers
	//button1: this.randomNumButton(this.randGuessRange[0],this.randGuessRange[1]),
	//button2: this.randomNumButton(this.randGuessRange[0],this.randGuessRange[1]),
	//button3: this.randomNumButton(this.randGuessRange[0],this.randGuessRange[1]),
	//button4: this.randomNumButton(this.randGuessRange[0],this.randGuessRange[1]),
	goal: this.randomNumButton(19,120),

	//your current number, will be added to by the buttons
	currentNum: 0,

	//wins and losses will be added to every time the game resets
	wins: 0,
	losses: 0,

	//runs when the round is over
	//reset : function () {
	//	resets the necessary variables
	//	if currentNum === goal;
	//		increase wins;
	//		broadcast You won!!
	//	else;
	//		increase losses;
	//		broadcast You lost!!
	//},

	//runs during each button click, adds to your current number, then checks for win/loss conditions
	//turn: function () {
	//	on button click
	//		if button 1 pressed;
	//			increase currentNum by button1
	//		else if button 2 pressed;
	//			increase by etc.
	//	if currentNum >= goal;
	//		reset();
	//},

	//random number generator, takes in a min and max number and returns a number that meets the conditions
	randomNumButton: function (min,max) {
		return Math.floor(Math.random()*(min-max+1)+min);
	},

}
console.log(cryatalCollector.button1)
console.log(cryatalCollector.button2)
console.log(cryatalCollector.button3)
console.log(cryatalCollector.button4)
console.log(cryatalCollector.goal)