// Challenge Objectives

/**
* Create new Object type name "Book"
* Use Class, Object constructor function, or individual objects
* Add Properties and methods
* Add at least fice booj objects
*/


class Book{
    constructor(
        title,
        author,
        pubYear,
        pageNum,
        currentPage,
        readStatus
    ){
        this.title = title;
        this.author = author;
        this.pubYear = pubYear;
        this.pageNum = pageNum;
        this.currentPage = currentPage;
        this.readStatus = readStatus;
    }

    // methods 
    updateCurrentPage(newCurrentPage){
        this.currentPage = newCurrentPage;
    }

    updateReadStatus(newReadStatus) {
        this.readStatus = newReadStatus;
    }
}

export default Book;