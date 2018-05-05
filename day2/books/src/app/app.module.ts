import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookNewComponent } from './books/book-new/book-new.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

import { TitleizePipe } from './titleize.pipe';

TitleizePipe.skipWords = ['of'];

import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookNewComponent,
    BookDetailComponent,
    TitleizePipe
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
