import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromBooks from './books';

import { BookListComponent } from './books/book-list/book-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    // /books
    path: 'books',
    children: [
      {
        path: '',
        component: fromBooks.BookListComponent
      },
      {
        path: 'new',
        component: fromBooks.BookNewComponent
      },
      {
        path: ':bookID',
        component: fromBooks.BookDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
