var code = require('../../secondGreatLow.js');

var test1 = [7, 7, 12, 98, 106]
var test2 = [5, 23, -112, 6, 70, 70, -112]
var test3 = [-22, 22]
var test4 = [10, 89, 3]

//secoundGreatLow1();
describe("secondGreatLow1 function", function() {

  it("Takes an array of numbers and outputs the 2nd Max number and the 2nd to Min number into an array", function() {
    expect(code.secondGreatLow1(test1)).toEqual([12, 98]);
  });

  it("Detects duplicates and negative numbers and outputs 2nd Min and 2nd Max", function() {
     expect(code.secondGreatLow1(test2)).toEqual([5, 23]);
  });

  it("Takes an array with only 2 values and outputs 2nd Max and 2nd Min", function() {
     expect(code.secondGreatLow1(test3)).toEqual([22, -22]);
  });

   it("Takes an array with only 3 values and outputs middle number which is the 2nd Max and 2nd Min", function() {
     expect(code.secondGreatLow1(test4)).toEqual([10, 10]);
  });

});



//secoundGreatLow2()
describe("secondGreatLow2 function", function() {

  it("Takes an array of numbers and outputs the 2nd Max number and the 2nd to Min number into a string", function() {
    expect(code.secondGreatLow2(test1)).toEqual("12 98");
  });

  it("Detects duplicates and negative numbers and outputs 2nd Min and 2nd Max", function() {
     expect(code.secondGreatLow2(test2)).toEqual("5 23");
  });

   it("Takes an array with only 2 values and outputs 2nd Max and 2nd Min", function() {
     expect(code.secondGreatLow2(test3)).toEqual("22 -22");
  });

   it("Takes an array with only 3 values and outputs middle number which is the 2nd Max and 2nd Min", function() {
     expect(code.secondGreatLow2(test4)).toEqual("10 10");
  });

});
