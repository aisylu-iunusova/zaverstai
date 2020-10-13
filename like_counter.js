/** Ставим лайк */
let likeClick = document.querySelector('.social_like');
let likes = document.querySelector('.like-counter');
let counter = 16;


likeClick.onclick = function () {
  if (likeClick.classList.contains('added')) {
    counter--;
    likeClick.classList.add('rotate')
    setTimeout(function () {
      likeClick.classList.remove('rotate')
    }, 200);
    likes.classList.remove('plus');


  } else {
    counter++;
    likeClick.classList.add('scale');

    setTimeout(function () {
      likeClick.classList.remove('scale');
    }, 200);

    likes.classList.add('plus');

  }
  likes.textContent = counter;
  likeClick.classList.toggle('added');
}
