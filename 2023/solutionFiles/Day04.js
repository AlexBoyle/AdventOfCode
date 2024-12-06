module.exports  = function(input) {
	
	
	let isIn = function(num, arr) {
		for(var i = 0; i < arr.length; i ++) {
			if(arr[i] === num) return true;
		}
	return false;
	}
	let cards = []
	let matchesArr = []
	let countArr = []
	let cardTotals = []
	let totalarr = []
	let total = 0;
	console.log(input)
	for(var gameIndex = 0; gameIndex < input.length; gameIndex ++) {
		//console.log("Game " + gameIndex + " ~~~~~~~~~~~~~~~~~~~~~")
		let line = input[gameIndex]
		let game = parseInt(line.substr(5,line.indexOf(":")))
		let r = 0, g = 0, b = 0
		let cycles = (line.substr(line.indexOf(":")+1)).split(" |")
		let matches = 0;
		for(var cycleIndex = 0; cycleIndex < cycles.length; cycleIndex++) {
			cycles[cycleIndex] = cycles[cycleIndex].match(/.{1,3}/g)
			
		}

		for (var j = 0; j < cycles[1].length; j++) {
			if(isIn(cycles[1][j], cycles[0])) {
				matches ++
			}
		}
		matchesArr.push(matches)
		
		
		totalarr[gameIndex] = 0;
		if(matches > 0)  {
			totalarr[gameIndex] = Math.pow(2,matches-1);
			total += Math.pow(2,matches-1)
		}
		cardTotals.push({'id': gameIndex, 'value': totalarr[gameIndex], 'collectedTotal': 0, 'totalRefs': 0, ref: []})
	}
	
	
	for(var gameIndex = 0; gameIndex < input.length; gameIndex ++) {
		for(var i = gameIndex+1; i <= gameIndex + matchesArr[gameIndex]; i ++) {
			cardTotals[gameIndex].ref.push(cardTotals[i])
		}
	}
	let overallTotal = 0
	let OverallTotalRef = 0;
	let totalCards = 0
	for(var gameIndex = input.length-1; gameIndex >= 0; gameIndex --) {
		let instTotal = cardTotals[gameIndex].value
		totalCards++
		cardTotals[gameIndex].totalRefs ++
		for(var j = 0; j < cardTotals[gameIndex].ref.length; j ++) {
			instTotal += cardTotals[gameIndex].ref[j].collectedTotal
			totalCards++
			cardTotals[gameIndex].totalRefs += cardTotals[gameIndex].ref[j].totalRefs
		}
		OverallTotalRef += cardTotals[gameIndex].totalRefs
		cardTotals[gameIndex].collectedTotal = instTotal
		overallTotal += instTotal
		
	}
	console.log("~~~~~~~~~")
	console.log(OverallTotalRef)

	
	
	
	
	
}
//

