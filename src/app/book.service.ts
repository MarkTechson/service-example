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

  constructor() { }

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
    return newLength - 1; // minus 1 because if the length is 1, then the index is 0
  }

  addChapterToBook(title: string, description: string, bookId: number) {
    const book: Book = this.getBookById(bookId);
    const chapter = new Chapter(title, description);
    book.chapters.push(chapter);
  }
}
