module.exports  = function(input) {
	//let tTime = input[0].split(/\s+/)
	let cardRef = ['a', 'k', 'q', 't', '9', '8', '7', '6', '5', '4', '3', '2', '1']
	let getNewCountObj = function() {
		return {'a': 0, 'k': 0, 'q': 0, 'j': 0, 't': 0, '9': 0, '8': 0, '7': 0, '6': 0, '5': 0, '4': 0, '3': 0, '2': 0, '1': 0 }
	}

	let calcBaseStrength = function(cards) {
		
		let matches = [0,0,0,0,0,0]
		let matches1 = [0,0,0,0,0,0]
		let counts1 = getNewCountObj()
		let counts = getNewCountObj()
		let numJ = 0;
		for(var i = 0; i < cards.length; i ++) {
			if(cards[i] == 'j') {
				numJ++
			}
			counts[cards[i]] ++
		}
		for(var i = 0; i < cardRef.length; i ++) {
			matches[counts[cardRef[i]]] ++
		}
		if(numJ == 0) {// check on og, is correct
			if (matches[5] == 1) { return 6; }// Five of a kind
			if (matches[4] == 1) { return 5; }// Four of a kind
			if (matches[3] == 1 && matches[2] == 1) { return 4; }// Full House
			if (matches[3] == 1) { return 3; }// Three of a kind
			if (matches[2] == 2) { return 2; }// Two Pair
			if (matches[2] == 1) { return 1; }// Pair
			if (matches[1] == 5) { return 0; }// High Card
		}
		else if (numJ == 1) {
			if (matches[4] == 1) { return 6; }// Five of a kind
			if (matches[3] == 1) { return 5; }// Four of a kind
			if (matches[2] == 2) { return 4; }// Full House
			if (matches[2] == 1) { return 3; }// Three of a kind
			// Skip 2 pair and go to three of a kind
			if (matches[1] == 4) { return 1; }// Pair
		}
		else if (numJ == 2) {
			if (matches[3] == 1) { return 6; }// Five of a kind
			if (matches[2] == 1) { return 5; }// Four of a kind
			if (matches[1] == 3) { return 3; }// three of a kind <<<<<<
		}
		else if (numJ == 3) {
			if (matches[2] == 1) { return 6; }// Five of a kind
			if (matches[1] >= 1) { return 5; }// Four of a kind
		}
		else if (numJ >= 4){ // Five of a kind
			return 6;
		}
		
		
		console.log(cards + " ~~~~~~~~~~~")
		console.log(numJ)
		console.log(matches)
		console.log(matches[3-numJ])

		return -1
	}
	let convert = function(tcards) {
		let cards = [...tcards]
		for (var i = 0; i < cards.length; i ++) {
			if(cards[i] == 't') (cards[i] = '10')
			if(cards[i] == 'j') (cards[i] = '1')
			if(cards[i] == 'q') (cards[i] = '12')
			if(cards[i] == 'k') (cards[i] = '13')
			if(cards[i] == 'a') (cards[i] = '14')
			cards[i] = parseInt(cards[i])
		}
		return cards;
	}
	let sortCards = function(a,b) {
		let diff = a.power - b.power;
		if(diff != 0)
			return diff;
		
		for(var i = 0; i < a.cards.length; i ++) {
			let diff1 = a.cards[i] - b.cards[i]
			if(diff1 != 0)
				return diff1;
		}
		console.log("?????")
		
		return 0;
	}
	let cardData = []
	for(var i = 0; i < input.length; i++) {
		let line =  input[i].split(/\s+/)
		let strength = calcBaseStrength(line[0].toLowerCase())
		let cards = convert(line[0].toLowerCase())
		cardData.push({cards: cards, bet: parseInt(line[1]), power: strength})
	}
	cardData.sort(sortCards)
	console.log(cardData)
	let total = 0
	for (var i = 0; i < cardData.length; i ++) {
		total += ((i+1) * cardData[i].bet)
	}
	console.log(total)
}