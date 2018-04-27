import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as fromBooks from './books';

import { TitleizePipe } from './titleize.pipe';

TitleizePipe.skipWords = ['of'];

import { BookService } from './services/book.service';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, ...fromBooks.components, TitleizePipe, NavComponent, NotFoundComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
