var Perf = Perf || {};

Perf.SpeedTest = function(testImplement, testParams, repetitions) {
	
	this.testImplement = testImplement;
	this.testParams    = testParams;
	this.repetitions   = repetitions || 10000;
	this.average       = 0;

	this.startTest();
};

Perf.SpeedTest.prototype = {
	startTest: function() {

		if (this.testImplement(this.testParams) === false) {
			throw("Test failed with those parameters.");
		}

		var beginTime, endTime, sumTimes = 0;
		
		for (var i = 0, x = this.repetitions; i < x; i++) {
			beginTime = +new Date();
			this.testImplement(this.testParams);
			endTime = +new Date();
			sumTimes += endTime - beginTime;
		}
		
		this.average = sumTimes / this.repetitions;
		return console.log("Average execution across " + this.repetitions + ": " + this.average);
	}
};

// var test = new Perf.SpeedTest(func, params);