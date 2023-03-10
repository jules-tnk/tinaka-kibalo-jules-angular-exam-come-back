import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../services/book/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  getBooksByWordSearch(value: string) {
    this.bookService.getBookByName(value).subscribe(
      data => {
        this.books = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
