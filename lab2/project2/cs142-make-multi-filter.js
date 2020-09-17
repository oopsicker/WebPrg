// // Invoking cs142MakeMultiFilter() with originalArray = [1,2,3] returns a function, saved in the variable arrayFilterer1,
// // that can be used to repeatedly filter the input array
// var arrayFilterer1 = cs142MakeMultiFilter([1,2,3]);

// // call arrayFilterer1 (with callback function) to filter out all the numbers not equal to 2
// arrayFilterer1(function (elem) {
//   return elem !== 2; // check if element is not equal to 2
// }, function (currentArray) {
//   console.log(this); // printing 'this' within the callback function should print originalArray which is [1,2,3]
//   console.log(currentArray); // prints [1, 3]
// });

// // call arrayFilterer1 (without callback function) to filter out all the elements not equal to 3
// arrayFilterer1(function (elem) {
//   return elem !== 3; // check if element is not equal to 3
// });
// // calling arrayFilterer1 with no filterCriteria should return the currentArray
// var currentArray = arrayFilterer1();
// console.log('currentArray', currentArray);   // prints [1] since we filtered out 2 and 3

function cs142MakeMultiFilter(originalArray) {
	var currentArray = originalArray;
	function arrayFilter(filterCriteria, callback) {
		if(!filterCriteria) {
			return currentArray;
		}
		currentArray = currentArray.filter(filterCriteria);
		if(callback) {
			callback.call(originalArray, currentArray); }
		return arrayFilter;
	}
	return arrayFilter;
}

// // Since arrayFilterer returns itself, calls can be chained
// function filterTwos(elem) { return elem !== 2; }
// function filterThrees(elem) { return elem !== 3; }
// var arrayFilterer2 = cs142MakeMultiFilter([1,2,3]);
// var currentArray2 = arrayFilterer2(filterTwos)(filterThrees)();
// console.log('currentArray2', currentArray2);   // prints [1] since we filtered out 2 and 3

// // Multiple active filters at the same time
// var arrayFilterer3 = cs142MakeMultiFilter([1,2,3]);
// var arrayFilterer4 = cs142MakeMultiFilter([4,5,6]);
// console.log(arrayFilterer3(filterTwos)());	// prints [1,3]
// console.log(arrayFilterer4(filterThrees)());	// prints [4,5,6]