var array = [7, 7, 12, 98, 106]

function secondGreatLow(arr) {
  //make copy of array because it will be spliced in the following functions
  var arrCopy = arr.slice();
  //push returned values of each function into this the answer array
  var answer = []
  answer.push(secondMin(arrCopy));
  answer.push(secondMax(arrCopy));
  return answer;
};

//helper function 1
var secondMin = function (arr){
  var arrCopy = arr.slice();
  //check length of array
  if (arr.length == 2) {
    return arr[0];
  } else {
    var min = Math.min.apply(null, arrCopy);
    arrCopy.splice(arrCopy.indexOf(min), 1);
    //check for duplicates
    for (var i = 0; i < arrCopy.length; i++) {
      if (arrCopy.indexOf(min) == -1) {
        return Math.min.apply(null, arrCopy);
      } else {
        arrCopy.splice(arrCopy.indexOf(min), 1);
        return Math.min.apply(null, arrCopy);
      }
    };
  }
};
//helper function 2
var secondMax = function (arr){
  var arrCopy = arr.slice();
  if (arr.length == 2) {
    return arr[1];
  } else {
    var max = Math.max.apply(null, arrCopy);
    // console.log(max);
    arrCopy.splice(arrCopy.indexOf(max), 1);
    //check for duplicates
    for (var i = 0; i < arrCopy.length; i++) {
      if (arrCopy.indexOf(max) == -1) {
        return Math.max.apply(null, arrCopy);
      } else {
        arrCopy.splice(arrCopy.indexOf(max), 1);
        return Math.min.apply(null, arrCopy);
      }
    };
  }
};
