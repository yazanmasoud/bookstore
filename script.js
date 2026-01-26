function init() {
    let myBook = document.getElementById('book');
    myBook.innerHTML = "";

    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        const book = books[bookIndex];
        myBook.innerHTML += getBookTemplate(book , bookIndex);
    }
}

function rendComments(book) {
    let myComments = "";
    for (let commentsIndex = 0; commentsIndex < book.comments.length; commentsIndex++) {
        const comment = book.comments[commentsIndex];
        myComments += getCommentTemplate(comment);

    }
    return myComments;
}

function addComment(bookIndex) {
    const myComment = document.getElementById(`comment-input-${bookIndex}`).value;
    books[bookIndex].comments.unshift({
        name: "Du",
        comment: myComment
    });
    init();
}

function addLike() {
    const likesSpan = document.getElementById('likes-count');
    const likes = Number(likesSpan.getAttribute("data-base"));
    likesSpan.innerHTML = likes +1;

}