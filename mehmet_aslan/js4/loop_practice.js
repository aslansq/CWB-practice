let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

//for(let i = 0; i < alpha.length; i++){
//	console.log(alpha[i]);
//}
//
//console.log('-------------------');
//
//for(let i = alpha.length - 1; i >= 0; i--){
//	console.log(alpha[i]);
//}

// printing divisble by 7 numbers from 0 to 100
//for(let i = 0; i < 100; i = i + 7) {
//	console.log(i)
//}

// Print numbers from 100 to 0 that are divisible by 13 
//for(let i = 100; i >= 0; i--) {
//	if(i % 13 != 0) {
//		continue
//	}
//	console.log(i)
//}

// Create a loop sums number from 0 to 100 and that skips to the next step when the value is divisible by 9 and exits the loop when the number is divisible by 17.
//let sum = 0
//for(let i = 0; i < 100; i++) {
//	if(i % 9 == 0) {
//		continue
//	}
//	if((sum % 17 == 0) && (sum != 0)) {
//		break
//	}
//	sum += i
//}
//console.log(sum)

// Print a letter from the array and numbers up to the position (index) of the letter Use inner loops. 
//let asciiNumA = 65
//let asciiNumZ = 90
//for (let i = asciiNumA; i <= asciiNumZ; i++) {
//	let s = String.fromCharCode(i) + ' '
//	for (let j = 0; j < (i-asciiNumA+1); j++) {
//		s += j + ' '
//	}
//	console.log(s);
//}


//Create a chessboard that looks like this using inner loops (more than one combination) This is a chessboard location matrix.
//You need to use an array ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] For everything else you should use loops
//let asciiNumA = 65
//let asciiNumH = asciiNumA + 7
//for(let i = 8; i >= 1; i--) {
//	let s = ''
//	for(let j = asciiNumA; j <= asciiNumH; j++) {
//		s += String.fromCharCode(j) + i +  ' '
//	}
//	console.log(s)
//}