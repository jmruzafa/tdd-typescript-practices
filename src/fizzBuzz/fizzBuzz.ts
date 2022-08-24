function isMultipleOf(input:number, divider:number){
    return input % divider == 0;
}

export function fizzBuzzOf(input: number) {
  const fizz = "Fizz";
  const buzz = "Buzz";
  if (isMultipleOf(input, 3) && isMultipleOf(input, 5)) return fizz + buzz;
  if (isMultipleOf(input, 3)) return fizz;
  if (isMultipleOf(input, 5)) return buzz;
  return input.toString();
}
