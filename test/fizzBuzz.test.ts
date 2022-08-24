import { fizzBuzzOf} from "../src/fizzBuzz";

describe ("FizzBuzz Component Exist", ()=>{
    it ("should print a number as a string", ()=>{
       expect(fizzBuzzOf(1)).toBe('1');
    })
 });