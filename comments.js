let commentsForm = document.querySelector('.comments-form');
let userName = document.querySelector('.comments-form_name');
let commentText = document.querySelector('.comments-form_message');
let commentsList = document.querySelector('.comments-list');
let commentateMail = document.querySelector('.comments-form_email')
let buttonForm = document.querySelector('.comments-form_button');


commentText.oninput = function () {
    if (200 > commentText.value.length && commentText.value.length >= 10) {
        buttonForm.disabled = false;
        commentText.classList.remove('error')


    }
    else {
        buttonForm.disabled = true;
        commentText.classList.add('error')
    }
}


commentsForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('comments-row');


    let row = document.createElement('div');
    row.classList.add('comments-row__commentate');


    let avatar = document.createElement('img');
    avatar.classList.add('commentate-avatar');
    avatar.src = 'images/unnamed.png';

    let commentateName = document.createElement('span');
    commentateName.classList.add('commentate-name');

    let message = document.createElement('div');
    message.classList.add('comment-text');


    commentateName.textContent = userName.value;
    userName.value = '';

    message.textContent = commentText.value;
    commentText.value = '';
    commentateMail.value = '';


    row.append(avatar);
    row.append(commentateName);

    newComment.append(row);
    newComment.append(message)
    commentsList.append(newComment);
};


