function init() {
    getDataFromLocalStorage();
    let myBook = document.getElementById('book');
    myBook.innerHTML = "";

    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        const book = books[bookIndex];
        myBook.innerHTML += getBookTemplate(book, bookIndex);
        rendLikeDislikeIcon(bookIndex)
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
        name: "DU",
        comment: myComment
    });
    saveToLocalStorage();
    init();
}


function rendLikeDislikeIcon(bookIndex) {
    let book = books[bookIndex];
    let likeImage = document.getElementById(`like-image-${bookIndex}`);

    if (book.liked === true) {
        likeImage.src = "./assets/icons/heart.png";

    }

    else if (book.liked === false) {
        likeImage.src = "assets/icons/heart(1).png";

    }
}


function toggleLike(bookIndex) {
    let likeImage = document.getElementById(`like-image-${bookIndex}`);
    let likesCount = document.getElementById(`likes-count-${bookIndex}`)
    let book = books[bookIndex];

    if (book.liked === false) {
        likeImage.src = "./assets/icons/heart.png";
        book.likes += 1;
        likesCount.innerText = book.likes;
        book.liked = true;
    }

    else if (books[bookIndex].liked === true) {
        book.likes -= 1;
        likesCount.innerText = book.likes;
        book.liked = false;
        likeImage.src = "assets/icons/heart(1).png";
    }
    saveToLocalStorage();
}


function saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}


function getDataFromLocalStorage() {
    let myBooks = JSON.parse(localStorage.getItem("books"));

    if (myBooks !== null) {
        books = myBooks;
    }

}


