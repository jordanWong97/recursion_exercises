/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return '';

  return str[0] + everyOther(str.slice(2));
  // use + instead of +=
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  // return arr[0] === val || find(arr.slice(1), val);  Previous solution
  
  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // if (str.length === 0) return true;
  // let boolean = str[0] === str[str.length - 1];
  // return boolean && isPalindrome(str.slice(1, -1));
  
  if (str.length === 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  
  return isPalindrome(str.slice(1, -1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return '';

  return revString(str.slice(1)) + str[0];
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index=0) {
  if (arr.length === 0) return -1;
  
  if (arr[0] === val) return index;
  
  return findIndex(arr.slice(1), val, index +1 )
  
  // other possible solution:
  // if (words.length === 0) return 0;
  // const thisLength = words[0].length;
  // return Math.max(thisLength, longest(words.slice(1)));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for(let key in obj) {
    if(typeof obj[key] === 'string') {
      arr.push(obj[key])
    }
    
    else if(typeof obj[key] === 'object') {
      gatherStrings(obj[key], arr);
    }
  }
  
  return arr;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  // If val is greater than arr[Math.floor(arr.length / 2)] then we start recursion in upper half
  // else start recursion in lower half
  
  const upperHalf = Math.floor((left + right) / 2);
  
  if(val === arr[upperHalf]) return true;
  
  if(right - left <= 1) return false;
  
  if(val > arr[upperHalf]) {
    return binarySearch(arr, val, upperHalf, right);
  }
  
  else {
    return binarySearch(arr, val, left, right - upperHalf - 1);
  }

}


/** binarySearchIndex: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left = 0, right = arr.length) {
  
  const upperHalf = Math.floor((left + right) / 2);
  
  if(val === arr[upperHalf]) return upperHalf;
  
  if(right - left <= 1) return -1;
  
  if(val > arr[upperHalf]) {
    return binarySearchIndex(arr, val, upperHalf, right);
  }
  
  else {
    return binarySearchIndex(arr, val, left, right - upperHalf - 1);
  }
}

// We started off with using .slice, but we then added left and right parameters
// so we don't have to keep making new arrays

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
