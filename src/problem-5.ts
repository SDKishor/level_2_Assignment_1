{
  //You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  function calculateAverageGrade(student: Student): number {
    return student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
  } 

  console.log(calculateAverageGrade({name: "amit", age: 27, grades: [30, 40, 70, 90, 50]}));

}