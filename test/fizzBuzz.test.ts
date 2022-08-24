import { fizzBuzzOf} from "../src/fizzBuzz";
/* Write a function that takes positive integers and outputs 
their string representation.

Your function should comply with the following additional rules:

-If the number is a multiple of three, return the string "Fizz".

-If the number is a multiple of five, return the string "Buzz".

-If the number is a multiple of both three and five, return the string "FizzBuzz". 

-Otherwise it will return the number
*/
// For example, given the numbers from 1 to 15 in order, 
// the function would return:

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
describe ("FizzBuzz Program", ()=>{
   const fizz = 'Fizz';
  const buzz = 'Buzz';
    it ("should print a number as a string", ()=>{
       expect(fizzBuzzOf(1)).toEqual('1');
    })
    it("should return 'Fizz' when passing 3", ()=>{
      expect(fizzBuzzOf(3)).toEqual(fizz);
    })
    it("should return '2' when passing 2", ()=>{
      expect(fizzBuzzOf(2)).toEqual('2');
    })
    it("should return '4' when passing 4", ()=>{
      expect(fizzBuzzOf(4)).toEqual('4');
    })
    it("should return 'Buzz' when passing 5", ()=>{
      expect(fizzBuzzOf(5)).toEqual(buzz);
    })
    //multiple of 3 => 'Fizz'
    it("should return 'Fizz' when passing 6", ()=>{
      expect(fizzBuzzOf(6)).toEqual(fizz);
    })
    it("should return 'Fizz' when passing 12", ()=>{
      expect(fizzBuzzOf(12)).toEqual(fizz);
    })
    it("should return 'Fizz' when passing 18", ()=>{
      expect(fizzBuzzOf(18)).toEqual(fizz);
    })
    //multiple of 5 => 'Buzz'
    it("should return 'Buzz' when passing 10", ()=>{
      expect(fizzBuzzOf(10)).toEqual(buzz);
    })
    //multiple of 3 and 5 should return 'FizzBuzz'
    it("should return 'FizzBuzz' when passing 15", ()=>{
      expect(fizzBuzzOf(15)).toEqual(fizz+buzz);
    })

 });