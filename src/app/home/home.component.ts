import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books = [];

  // Inject access to the router in our component
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  onSubmit(val: any) {
    // First, let's save our book to the service
    const bookID = this.bookService.createBook(val.title);
    this.router.navigate(["details", bookID]);
  }
}
