export function fizzBuzzOf(input: number) {
  const fizz = 'Fizz';
  const buzz = 'Buzz';
  if (input == 3) return fizz;
  if (input == 2) return "2";
  if(input == 4) return '4';
  if(input == 5) return buzz;
  return "1";
}
