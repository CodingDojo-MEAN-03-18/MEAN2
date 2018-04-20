import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';
import { BOOKS } from '../../data/book-data';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe]
})
export class BookListComponent implements OnInit {
  selectedBook: Book;
  books: Array<Book> = BOOKS;

  constructor(private titlize: TitleizePipe) {}

  ngOnInit() {
    this.books.forEach(book => {
      book.author = this.titlize.transform(book.author);
    });
  }

  selectBook(book: Book): void {
    console.log('selecting book', book);
    // this.selectedBook = book;

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(event: Book) {
    console.log('creating book', event);
    this.books.push(event);
  }
}
