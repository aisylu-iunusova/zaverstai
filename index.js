/** Фильтер для статей */
let articlesTag = document.querySelectorAll(".articles__submenu li a")
let articles = document.querySelectorAll(".articles__item")

function articleFilter(e) {
    e.preventDefault();

    for (let article of articles) {
        article.classList.remove('hidden');
        if (this.dataset.tag !== article.dataset.tag && this.dataset.tag !== 'all_articles') {
            article.classList.add('hidden');
        }

    }
}

for (let tag of articlesTag) {
    tag.addEventListener('click', articleFilter);
}


/** Проверка формы */
let button = document.querySelector('button.button_form');
let textarea = document.querySelector('textarea.message');

textarea.oninput = function () {
    if (200 >= textarea.value.length && textarea.value.length >= 10) {
        button.disabled = false;
        textarea.classList.remove('error')
    }
    
    else {
        button.disabled = true;
        textarea.classList.add('error')
    }
}


