import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  bookId: number;
  book: Book;

  ngOnInit(): void {
    // now we have access to the bookId! We can use this
    // to do all kinds of logic later!
    this.bookId = this.route.snapshot.params["id"];

    // Using the bookId from above, we can ask the service
    // to find the book by Id that we want
    this.book = this.bookService.getBookById(this.bookId);
  }
}