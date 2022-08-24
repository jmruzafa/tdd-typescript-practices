export function fizzBuzzOf(input: number) {
  const fizz = "Fizz";
  const buzz = "Buzz";
  if (input % 3 == 0 && input % 5 == 0) return fizz + buzz;
  if (input % 3 == 0) return fizz;
  if (input % 5 == 0) return buzz;
  return input.toString();
}
