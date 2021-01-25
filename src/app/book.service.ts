import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Chapter } from './chapter';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // Setting this to private allows us to control
  // access to how this data is accessed by parts
  // of our application that use the service.
  private books = [];

  constructor() {
    const data = JSON.parse(localStorage.getItem('books'));
    if (data !== null) {
      this.books = data;
    } else {
      // If the data is null, then that means we don't have anything in local
      // storage. So we'll add an empty array. localStorage.setItem takes two inputs
      // a name and the data. The data must be in a string format. I'm just putting an
      // empty array for now.
      localStorage.setItem('books', '[]');
    }
  }

  getBookById(id: number) {
    return this.books[id];
  }

  getBooks() {
    return this.books;
  }

  createBook(title: string): number {
    const book = new Book(title);

    // push() returns the length of the array after adding
    // the new value.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push#return_value
    const newLength = this.books.push(book);

    // save the data to localstorage
    this.persistBookData();
    return newLength - 1; // minus 1 because if the length is 1, then the index is 0
  }

  addChapterToBook(title: string, description: string, bookId: number) {
    const book: Book = this.getBookById(bookId);
    const chapter = new Chapter(title, description);
    book.chapters.push(chapter);

    // since we've updated the chapter, we want to save the book data
    this.persistBookData();
  }

  private persistBookData(): void {
    // Let's save the data here to localstorage. Remember that the data
    // must be in string format when saving it to localstorage. To make that
    // work, I'm saving it using JSON.stringify. I'm just resaving the entire
    // books array every time. This isn't the most elegant solution but for this
    // example, this should be fine. The better way is to eventually integrate
    // a database.
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
