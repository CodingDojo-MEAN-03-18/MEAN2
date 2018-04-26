import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../book';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book: Book = new Book();

  @Output() createBook = new EventEmitter<Book>();

  constructor(private bookService: BookService) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    const { value, valid } = form;
    console.log('submitting form ', form.value);

    this.bookService.createBook(this.book).subscribe(book => {
      this.createBook.emit(book);
      this.book = new Book();

      form.reset();
    });

    // this.books.push(this.book);

    // console.log('books', this.books);
  }
}
