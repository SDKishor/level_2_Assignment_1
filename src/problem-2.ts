{
  //Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

  function findLargestNumber(numbers: number[]): number {
    return Math.max(...numbers);
  }

  console.log(findLargestNumber([21, 2, 13, 4, 5,23]));
  
}