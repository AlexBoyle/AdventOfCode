module.exports  = function(input) {
	console.log(input)
	let removeDuplicates = function (arr) {
    return arr.filter((item,index) => arr.indexOf(item) === index);
	}
	let isNumber = function(chr) {
		return chr >= '0' && chr <= '9'
	}
	let isSym = function(chr) {
		return !isNumber(chr) && chr != '.' && chr != null
	}
	let isNearSym = function(x, y) {
		let checked = [0,0,0,0,1,0,0,0,0];
		for (var i = 0; i < checked.length; i ++) {
			if (checked[i] == 0) {
				let chr = input[x + (-1+Math.floor(i/3))]?.[y + (-1+(i%3))]
				if(isSym(chr)) {
					return true
				}
			}
		}
	}
	
	let isNearGear = function(x, y) {
		let checked = [0,0,0,0,1,0,0,0,0];
		for (var i = 0; i < checked.length; i ++) {
			if (checked[i] == 0) {
				let chr = input[x + (-1+Math.floor(i/3))]?.[y + (-1+(i%3))]
				if(chr == "*") {
					return (x + (-1+Math.floor(i/3)))+ "." + (y + (-1+(i%3)))
				}
			}
		}
	}
	
	
	let numberList = [];
	let sum = 0;
	let bigtotal = 0 
	let gears = {};
	for(var i =0; i < input.length; i ++) {
		let isNearSymBool = false
		let neerGears = []
		let tempNumber = ""
		for(var j =0; j <= input[i].length; j ++) {
			let value = input[i]?.[j];
			if(!(isNumber(value))) {
				if(tempNumber != "" && isNearSymBool) {
					isNearSymBool = false;
					let num = parseInt(tempNumber)
					numberList.push(num)
					sum += num
					console.log(num)
					neerGears = [...(new Set(neerGears))]
					for(var g = 0; g < neerGears.length; g++) {
						let key = neerGears[g]
						
						console.log(neerGears[g])
						console.log(gears[key])
						gears[key] = typeof gears[key]?.num == "number" ? {'num': gears[key].num * num, 'isDone': true} : {'num': num, 'isDone': false}
						if(gears[key].isDone) {
							bigtotal += gears[key].num
						}
					}
					
					neerGears = []
					tempNumber = ""
				}
				tempNumber = ""
				
			}
			else if(isNumber(value)) {
				tempNumber += value;
				isNearSymBool = isNearSymBool || isNearSym(i,j)
				t = isNearGear(i,j)
				if(t != null) {neerGears.push(t)}
			}
		}
	}
	console.log("~~~~~~~~~~~~~~~~~")
	console.log(gears)
	console.log(numberList)
	console.log(sum)
	console.log(bigtotal)
}



//Too High
//877132074084




//pt2
//
//78826761
//
//