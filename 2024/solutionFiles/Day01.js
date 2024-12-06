module.exports  = function(input) {
	let find = function(str) {
		let out = ""
		for(var dir = 0; dir < 2; dir ++) {
			let newStr = ""
			for(var i = 0; i < str.length; i++) {
				let ch =  dir == 0 ? str[i] : str[str.length-1-i]
				newStr  = dir == 0 ? newStr + ch : ch + newStr
				if(ch >= '0' && ch <= '9') { out +=  ch; break}
				else if(newStr[dir == 0 ? "endsWith" : "startsWith"]("nine"))  { out += '9'; break }
				else if(newStr[dir == 0 ? "endsWith" : "startsWith"]("eight")) { out += '8'; break }
				else if(newStr[dir == 0 ? "endsWith" : "startsWith"]("seven")) { out += '7'; break }
				else if(newStr[dir == 0 ? "endsWith" : "startsWith"]("six"))   { out += '6'; break }
				else if(newStr[dir == 0 ? "endsWith" : "startsWith"]("five"))  { out += '5'; break }
				else if(newStr[dir == 0 ? "endsWith" : "startsWith"]("four"))  { out += '4'; break }
				else if(newStr[dir == 0 ? "endsWith" : "startsWith"]("three")) { out += '3'; break }
				else if(newStr[dir == 0 ? "endsWith" : "startsWith"]("two"))   { out += '2'; break }
				else if(newStr[dir == 0 ? "endsWith" : "startsWith"]("one"))   { out += '1'; break }
			}
		}
		return parseInt(out);
	}
	let total = 0;
	for(var i = 0; i < input.length; i++) { total += find(input[i]) }		
	console.log(total)
}