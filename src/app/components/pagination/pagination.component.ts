import { Pagination } from './../../model/pagination';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() navigateToPage = new EventEmitter<string>();
  @Input() pagination : Pagination | null = null;

  constructor() { }

  ngOnInit(): void {}

  asdnavigateToPage(page : String) {
    this.navigateToPage.emit("");
  }

  firstPage() {
    if (this.pagination?.firstPageUrl) {
      this.navigateToPage.emit(this.pagination?.firstPageUrl);
    }
  }

  nextPage() {
    if (this.pagination?.nextPageUrl) {
      this.navigateToPage.emit(this.pagination?.nextPageUrl);
    }
  }

  prevPage() {
    if (this.pagination?.prevPageUrl) {
      this.navigateToPage.emit(this.pagination?.prevPageUrl);
    }
  }

  lastPage() {
    if (this.pagination?.lastPageUrl) {
      this.navigateToPage.emit(this.pagination?.lastPageUrl);
    }
  }

  getPrintableCurrentPage(): number {
    if (this.pagination?.currentPage !== null && this.pagination?.currentPage !== undefined) {
      return this.pagination?.currentPage + 1;
    }
    return -1
  }

  getPrintableMaxPage(): number {
    if (this.pagination?.totalPages !== null && this.pagination?.totalPages !== undefined) {
      return this.pagination?.totalPages;
    }
    return -1
  }

}
