import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  
  bookForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private booksService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.bookForm = this.formBuilder.group({
      title : ['', Validators.required],
      author : ['', Validators.required],
      synopsis : '',
    });
  }

  get f() { return this.bookForm.controls; }

  onSaveBook(): void {
    const newBook = new Book(
      this.f.title.value,
      this.f.author.value
    );
    newBook.synopsis = this.f.synopsis.value;
    this.booksService.createNewBook(newBook);
    this.router.navigate(['/books']);
  }
}
