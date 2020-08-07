let numbers = [1,2,3,4,5,6,7,8,9,10];


numbers.reduce(function(accumulator, currentValue,currentIndex){
    console.log(accumulator+currentValue, currentValue , currentIndex);
    return accumulator + currentValue;
});


// callback iteration	    accumulator	currentValue	currentIndex	array	            return value
// first call	            0	        1	            1	            [0, 1, 2, 3, 4]	    1
// second call          	1	        2	            2	            [0, 1, 2, 3, 4]	    3
// third call	            3	        3	            3	            [0, 1, 2, 3, 4]	    6
// fourth call          	6	        4	            4	            [0, 1, 2, 3, 4]	    10