
let checkNumbers = (isIncreasing, n1, n2) => {
	let iS = true;
	let diff = Math.abs(n1 - n2)
	if((isIncreasing && n1 > n2) || (!isIncreasing && n1 < n2)) {iS = false;}
	if(diff < 1 || diff > 3) {iS = false;}
	return iS;
}
//mark 12m
let partOne = (input) => {
	let safeCount = 0;
	for (var i = 0; i < input.length; i ++) {
		let report = input[i]
		let isSafe = true;
		let isIncreasing = report[1] > report[0];
		for (var j = 1; j < report.length; j ++) {
			let check = checkNumbers(isIncreasing, report[j-1], report[j])
			if(!check) { isSafe = false; break; }
		}
		if(isSafe) { safeCount++ }
	}
	console.log(safeCount)
}

// 633 too low
// 641 too low

// 645 incorrect
// 646 incorrect

// 650 incorrect
// 658 Im gonna kms
// 666 incorrect
// 667 is too high


let partTwo = (input) => {
	
	let safeCount = 0;
	let countFailedOnInitalCheck = 0;
	for (var i = 0; i < input.length; i ++) {
		
		let isSafe = true;
		let j = 1;
		let report = input[i]
		let numberOfFailures = 0;
		let isIncreasing = report[0] < report[1]
		if(report[0] === report[1]) {
			if(report[0] === report[2])
				isSafe = false
			else {
				isIncreasing = report[j-1] < report[j+1]
			}
		}
		for (; j < report.length; j ++) {
			let check = checkNumbers(isIncreasing, report[j-1], report[j]);
			if(!check && j < report.length - 1) {
				check = checkNumbers(isIncreasing, report[j-1], report[j+1]);
				numberOfFailures++;
			}
			else if (!check && j == report.length - 1) {
				break;
			}
			
			if(!check) {
				isSafe = false;
				break;
			}
		}
		if(numberOfFailures > 1) {
			console.log(report)
			console.log(numberOfFailures)
			safeCount--
			}
		if(isSafe) {

			safeCount ++
		}
		
	}
	console.log("countFailedOnInitalCheck: " + countFailedOnInitalCheck)
	console.log(safeCount)
}


let partTwoTwo = (input) => {
	let safeCount = 0;
	for (var i = 0; i < input.length; i ++) {
		let report = input[i]
		let isSafe = true;
		let isIncreasing = report[1] > report[0];
		let checkCount = 0;
		for (var j = 1; j < report.length; j ++) {
			let check = checkNumbers(isIncreasing, report[j-1], report[j])
			if(!check ) {
				check = checkNumbers(isIncreasing, report[j-1], report[j+1]); 
				j++; 
				checkCount++
			}
			if(!check) { isSafe = false; break; }
		}
		
		if(isSafe && checkCount <= 1) { 
			safeCount++ 
		}
		if(isSafe && checkCount > 1) {
			console.log(checkCount);
			console.log(JSON.stringify(report))
		}
	}
	console.log(safeCount)
}







let areNumbersCloseEnough = (n1, n2) => {
	let diff = Math.abs(n1 - n2)
	return diff >=1 && diff <=3
}
let checkArray = (arr) =>{
	dir = []
	check = []
	for (var i = 1; i < arr.length; i ++) {
		check.push(areNumbersCloseEnough(arr[i-1], arr[i]))
		dir.push(Math.sign(arr[i-1] - arr[i]))
	}
	return dir.every(val => val === dir[0]) && check.every(val => val === check[0]);
}
let genArrays = (arr) => {
	let out = [];
	for(var i = 0; i < arr.length; i++) {
		out.push([arr[0]])
		for(var j = 1; j < arr.length-1; j++) {
			if(i != j)
				out[i].push(arr[j])
		}
		out[i].push(arr[arr.length-1])
	}
	return out;
}
let partTwoThree = (input) => {
	let safeCount = 0;
	let safeByInitalC = 0;
	let safeByAfterC = 0;
	for (var i = 0; i < input.length; i ++) {
		let report = input[i]
		let isSafe = true;
		let closeCheck = true;
		let t = checkArray(report)
		if(t) {safeByInitalC++; continue;}
		
		let gArr = genArrays(report);
		console.log(report)
		console.log(gArr)
		for(var j = 0; j < gArr.length && !t; j++) {
			t = checkArray(gArr[j])
		}
		if(t) {
			safeByAfterC++
		}
	}
	console.log(safeByInitalC)
	console.log(safeByInitalC + safeByAfterC)
}


module.exports  = function(input) {
	input = input.reduce((result, item) =>{
		item = item.split(" ")
		for (var j = 0; j < item.length; j ++) {
			item[j] = parseInt(item[j])
		}
		result.push(item)
		return result
	}, [])
	partOne(input)
}
