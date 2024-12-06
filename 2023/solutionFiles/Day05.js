module.exports  = function(input) {
	let seeds = input[0].substr(input[0].indexOf(":")+2).split(' ')
	
	for(var i = 0; i < seeds.length; i ++) {seeds[i] = parseInt(seeds[i])}
	console.log(seeds)
	let rules = []
	let rulesMap = {}
	let currentRule = ""
	for(var i = 1; i < input.length; i ++) {
		if(input[i] == "") continue;
		else if(input[i].includes("map")) {
			currentRule = input[i].substr(0,input[i].indexOf("map")-1)
			rulesMap[currentRule] = []
			rules.push(currentRule)
		}
		else {
			let rule = input[i].split(" ");
			let dest = parseInt(rule[0])
			let start = parseInt(rule[1])
			let distance = parseInt(rule[2])
			rulesMap[currentRule].push({'source': [start, dest, distance, start-dest], 'isApplicable': function(num) { return num >= start && num <= start+ distance }, 'apply': function (num) { return num + (dest-start)}})
		}
	}
	let apply = function(rule, seed) {
		//console.log(rulesMap[rule])
		for(var ruleId = 0; ruleId < rulesMap[rule].length; ruleId ++) {
			if(rulesMap[rule][ruleId].isApplicable(seed)) {
				return rulesMap[rule][ruleId].apply(seed)
			}
		}
		return seed;
	}
	

	
	
	
	let lowestDest = -1
	let totalProccessed = 0;
	let totalToProcess = 0
	for(var i = 0; i < seeds.length; i += 2) {
		console.log((seeds[i+1]))
		totalToProcess += (seeds[i+1]);
	}
	console.log(totalToProcess)
	
	
	
	
	for(var i = 0; i < seeds.length; i += 2) {
		let initSeed = (seeds[i])
		
		for(var j = 0; j < (seeds[i+1]); j ++) {
			totalProccessed ++
			//(console.log("Processed: " + ((totalProccessed/totalToProcess)*100)))
		if (totalProccessed%1000000 == 0) {
			console.log("Processed: " + totalProccessed)
			console.log("out of   : " + totalToProcess)
			console.log()
		}
			let tSeed = initSeed+j
			for(var ruleMapId = 0; ruleMapId < rules.length; ruleMapId ++) {
				let result = apply(rules[ruleMapId], tSeed);
				//console.log(result)
				tSeed = result
			}
			if(lowestDest == -1 || tSeed < lowestDest)
				lowestDest = tSeed
		}
			
	}
	/*
	for(let seedId = 0; seedId < seeds.length; seedId ++) {
		
		//console.log("Seed: " + seeds[seedId] + " ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
		let tSeed = parseInt(seeds[seedId])
		for(var ruleMapId = 0; ruleMapId < rules.length; ruleMapId ++) {
			let result = apply(rules[ruleMapId], tSeed);
			//console.log(result)
			tSeed = result
		}
		if(lowestDest == -1 || tSeed < lowestDest)
			lowestDest = tSeed
		
	}
	*/
	console.log()
	console.log(lowestDest)
	
	
	
	
}

