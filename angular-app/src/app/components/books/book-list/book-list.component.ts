import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  bookSubscription?: Subscription;

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.bookSubscription = this.bookService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books
      }
    )
    this.bookService.emitBooks();
  }

  ngOnDestroy(): void {
    this.bookSubscription?.unsubscribe();
  }

  onNewBook(): void {
    this.router.navigate(['/books', 'new']);
  }

  onViewBook(id: number): void {
    this.router.navigate(['/books', 'view', id]);
  }

  onDeleteBook(book: Book): void {
    this.bookService.removeBook(book);
  }
}
