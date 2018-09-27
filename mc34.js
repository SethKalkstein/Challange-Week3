
// 1. Write a function that takes three arguments (numbers), adds 
// them together and checks if the result is divisible by 3;
// If it is divisible by three return true, if not return false

// 2. 

// // Create a function that takes two arrays, each having elements 
// that are numbers. Compare the sum of the numbers in each array. 
// Return the array with the largest sum:

// var array1 = [1,54,65,345,878,565,23,43,123,432,1232,543,876,89,546, 32,123];
// var array2 = [ 123, 234,789,56,345,65,34,456,23,543,2,345,23,45,2,234,34,234,234,34,234, 434]

// 3. Write a program that prints the numbers from 1 to 100. For 
// multiples of three print “Rick” instead of the number and for 
// the multiples of five print “Roll”. For numbers which are 
// multiples of both three and five print "RickRoll".

 

// 4. Write a function that takes an array of numbers and returns the
 // highest number in this array.

// ex.  -> [1,2,3,4,5,6,7,8,9,10,15,16,7,6] = should return 16



//Challange 1
function triNumber(num1,num2,num3){
	if((num1+num2+num3)%3==0){
		return true;
	}
	else{
		return false;
	}
}

// Challange 2
function twoArrayCompare(array1,array2) {
	var sum1 = addArray(array1);
	var sum2 = addArray(array2);
	if (sum1>sum2){
		return array1;
	}
	else if (sum2>sum1){
		return array2;
	}
	else {
		alert("The sum of the arrays are equal.")
	}
}

function addArray(arrayVar) {
	var sumVar = 0;
	for(let i=0;i<arrayVar.length;i++){
		sumVar+=arrayVar[i];
	}
	return sumVar;
}

//Challange 3
function rickRoll(){
	for (let i=1; i<=100;i++){
		if(i%3===0 && i%5===0){
			console.log("RickRoll");
		}
		else if(i%5===0){
			console.log("Roll");
		}
		else if(i%3===0){
			console.log("Rick");
		}
		else {
			console.log(i);
		}
	}
}

//Challange 4

function highestDigit(highArray) {
	var currentTop = highArray[0];
	for(let i=1; i<highArray.length;i++){
		if(highArray[i]>currentTop){
			currentTop = highArray[i];
		}
	}
	return currentTop;
}