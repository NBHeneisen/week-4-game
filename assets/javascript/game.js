window.onload = function() {

$(".goal").html(collector.goal);

};
var collector = {
	//randGuessRange: [1,12],	//creates a range for the buttons, easily editable to make the range different.

	//the buttons and goal, using the randomNumButton function to generate random numbers

	button1: randomNumButton(1,12),
	button2: randomNumButton(1,12),
	button3: randomNumButton(1,12),
	button4: randomNumButton(1,12),
	goal: randomNumButton(19,120),

	//your current number, will be added to by the buttons
	currentNum: 0,

	//wins and losses will be added to every time the game resets
	wins: 0,
	losses: 0,


	//runs when the round is over, resets necessary numbers and increases win/loss counters.
	reset: function () {		
		if (this.currentNum === this.goal) {
			this.wins ++;
			$("#wins").html(collector.wins);
			$(".winning").html("<p>You win!!!</p>");
		} else if (this.currentNum > this.goal) {
			this.losses ++;
			$("#losses").html(collector.losses);
			$(".losing").html("<p>You lose!!!</p>");
		};

		this.button1 = randomNumButton(1,12);
		this.button2 = randomNumButton(1,12);
		this.button3 = randomNumButton(1,12);
		this.button4 = randomNumButton(1,12);
		this.goal = randomNumButton(19,120);
		$(".goal").html(collector.goal);

		this.currentNum = 0;
	},

};

//random number generator, takes in a min and max number and returns a number that meets the conditions
function randomNumButton(min,max) {
	return Math.floor(Math.random()*(max-min+1)+min);
};

function reply_click(clicked_id) {
	$(".winning").html("");
	$(".losing").html("");
	console.log(clicked_id);
	collector.currentNum += collector[clicked_id];
	$(".score").html(collector.currentNum);
	console.log(collector.currentNum);
	if (collector.currentNum >= collector.goal) {
		collector.reset();
	};
};


console.log(collector.button1);
console.log(collector.button2);
console.log(collector.button3);
console.log(collector.button4);
console.log(collector.goal);

