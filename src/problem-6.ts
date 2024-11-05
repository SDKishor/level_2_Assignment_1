{
  //You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

  type Book = {
    title: string;
    author: string;   
    publishedYear: number;
  }

  function isRecentBook(book: Book): boolean {
    const currentYear = new Date().getFullYear();
    return currentYear - book.publishedYear <= 5;
  }   

  console.log(isRecentBook({title: "coder loves javascript", author: "SD Kishor", publishedYear: 2033}));

}