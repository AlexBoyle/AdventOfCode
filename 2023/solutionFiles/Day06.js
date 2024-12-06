module.exports  = function(input) {
	let tTime = input[0].split(/\s+/)
	let tDistance = input[1].split(/\s+/)
	let times = []
	let dists = []
	for(var i = 1; i < tTime.length; i++) {
			times.push(parseInt(tTime[i]))
			dists.push(parseInt(tDistance[i]))
	}

	let total = 1;
	for(var raceIndex = 0; raceIndex < times.length; raceIndex ++) {
		let lower = 1;
		for(var i = 1; i < times[raceIndex]; i ++) {
			if(dists[raceIndex] < (i) * (times[raceIndex]-i)) {
				lower = i; break
			}
		}
		console.log(lower + " " +  (times[raceIndex]-i))
		console.log( ((times[raceIndex]-i)-lower)+1)
		total *=((times[raceIndex]-i)-lower)+1
	}
	console.log(total)
	
}

/*
where wT + rT = TT
rT * wT


Ie

9 < rT * wT

*/