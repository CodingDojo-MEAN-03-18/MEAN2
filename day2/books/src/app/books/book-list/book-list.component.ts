import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';

import { TitleizePipe } from '../../titleize.pipe';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe]
})
export class BookListComponent implements OnInit {
  selectedBook: Book;
  books: Array<Book> = [];

  constructor(
    private titlize: TitleizePipe,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      console.log(books);
      this.books = books;

      this.books.forEach(book => {
        book.author = this.titlize.transform(book.author);
      });
    });

    // this.bookService.difference$.subscribe()
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

  onClick(event: Event) {
    event.stopPropagation();
  }

  onDelete(id: number) {
    console.log('delete book', id);

    this.bookService.deleteBook(id).subscribe(returnedBook => {
      console.log(returnedBook);

      this.books = this.books.filter(b => b.id !== returnedBook.id);
    });
  }
}
