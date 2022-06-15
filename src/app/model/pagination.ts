export class Pagination {
  prevPageUrl : string | null;
  nextPageUrl : string | null;
  firstPageUrl : string | null;
  lastPageUrl : string | null;

  size : number | null;
  totalElements : number | null;
  totalPages : number | null;
  currentPage : number | null;

  constructor(prevPageUrl : string, nextPageUrl : string, firstPageUrl : string, lastPageUrl : string,
      size : number, totalElements : number, totalPages : number, currentPage : number) {

    this.prevPageUrl = prevPageUrl;
    this.nextPageUrl = nextPageUrl;
    this.firstPageUrl = firstPageUrl;
    this.lastPageUrl = lastPageUrl;

    this.size = size;
    this.totalElements = totalElements;
    this.totalPages = totalPages;
    this.currentPage = currentPage;

  }
}
