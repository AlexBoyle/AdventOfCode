module.exports  = function(input) {
	console.log(input)
	let total = 0;
	for(var gameIndex = 0; gameIndex < input.length; gameIndex ++) {
		let line = input[gameIndex]
		let game = parseInt(line.substr(5,line.indexOf(":")))
		let r = 0, g = 0, b = 0
		let cycles = (line.substr(line.indexOf(":")+2)).split("; ")
		for(var cycleIndex = 0; cycleIndex < cycles.length; cycleIndex++) {
			marbles = cycles[cycleIndex].split(", ")
			for (var marbleIndex = 0; marbleIndex < marbles.length; marbleIndex++) {
				let obj = marbles[marbleIndex].split(" ")
				let num = parseInt(obj[0]);
				if(obj[1] == "blue" && num > b) { b = num }
				if(obj[1] == "red" && num > r) { r = num }
				if(obj[1] == "green" && num > g) { g = num }
			}
		}
		total += (r*g*b)
	}
	console.log(total)
}
