// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

//input => array, target number
//output => return indices of the number that add upto to the target
//example => [3,2,4] , 6 . Return [1,2]
//corner cases => what if the array is empty? , what if there exists more than one solution

var twoSum = function(nums, target) {

    const map = new Map();
    
    // the Lookup speed in a Map is constant time O(1)
    for(let i=0; i < nums.length; i++) {
        let currVal = nums[i];
        if(map.has(currVal)) {
            return [map.get(currVal), i];
        }  
        let diffVal = target - currVal;
        map.set(diffVal, i);
    }
};