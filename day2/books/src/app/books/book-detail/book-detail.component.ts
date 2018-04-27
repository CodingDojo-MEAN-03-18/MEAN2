import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../../services/book.service';

import { Book } from '../../book';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  errorMessage: string;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.bookService.getBook(params.get('bookID')))
      .subscribe(
        book => {
          console.log('got book', book);
          this.book = book;
        },
        error => {
          console.log('got an error');
          console.log(error);
          this.errorMessage = error.statusText;

          setTimeout(() => {
            this.errorMessage = null;
          }, 3000);
        }
      );
  }
}
