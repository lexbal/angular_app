import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, Subscription } from 'rxjs';

import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [];
  bookSubject = new Subject<Book[]>();

  constructor(private firestore: AngularFirestore) {
    this.getBooks();
  }

  emitBooks(): void {
    this.bookSubject.next(this.books.slice());
  }

  getBooks(): Subscription {
    return this.firestore.collection("books").valueChanges().subscribe(
      (res) => {
        res.map((doc) => this.books.push(doc as Book));
        this.emitBooks();
      } 
    );
  }

  getSingleBook(id: number): Promise<any> {
    return new Promise(
      (resolve, reject) => {
        this.firestore.collection("books/"+id).valueChanges()
          .subscribe(
            (book) => {
              console.log(book)
              //this.books = books ? books : [];
              this.emitBooks(); 
            }
          );
      }
    )
  }

  createNewBook(book: Book): void {
    this.books.push(book);
    this.saveBooks(book);
    this.emitBooks();
  }

  removeBook(book: Book): void {
    const bookIndexToRemove = this.books.findIndex(
      (bookEl: any) => {
        if (book === bookEl) {
          return true;
        }

        return false;
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.emitBooks();
  }

  saveBooks(book: Book): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        this.firestore
            .collection("books")
            .add(book)
            .then(res => {}, err => reject(err));
      }
    );
  }
}
