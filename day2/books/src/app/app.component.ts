import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: Book = new Book();
  books: Array<Book> = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    const { value, valid } = form;

    console.log('submitting form ', form.value);

    this.books.push(this.book);

    this.book = new Book();

    form.reset();

    console.log('books', this.books);
  }
}
