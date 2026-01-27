function getBookTemplate(book , bookIndex) {
    return `
        <section class="BookSlot">
            <header class="BookSlotHeader">
                <h2>${book.name}</h2>
            </header>
            <div class="BookInformations">
                <div class="BookInformatiosHead">
                    <img class="BookIcon" src="./assets/icons/book.png" alt="Book Icon">
                    <div class="Likes">
                        <span id="likes-count-${bookIndex}">${book.likes}</span>
                        <img id="like-image-${bookIndex}" onclick="toggleLike(${bookIndex})" class="LikeIcon"  src="assets/icons/heart(1).png" alt="Likes Icon">
                    </div>
                </div>

                <table class="BookInformationsTable">
                    <tr>
                        <td>Preis</td>
                        <td>${book.price} $</td>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td>${book.author}</td>
                    </tr>
                    <tr>
                        <td>Erscheinungsjahr</td>
                        <td>${book.publishedYear}</td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>${book.genre}</td>
                    </tr>
                </table>
            </div>
            <div class="BookComments">
                <h3 class="CommentsTitle">Kommentare :</h3>
                <ul class="CommentList">
                ${rendComments(book)}
                </ul>
            </div>
            <div>
            <input id="comment-input-${bookIndex}" class="CommentInputField" type="text" placeholder="Schreibe einen Kommentar..">
            <button onclick="addComment(${bookIndex})">senden</button>
            </div>
        </section>
    `
    
}


function getCommentTemplate(comment) {
    return `<li class="Comment">
                <strong>${comment.name}:</strong>
                <p>${comment.comment}</p>
            </li>`;
}