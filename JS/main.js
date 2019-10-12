let header_nav = document.querySelector('.header__nav');
let nav_mobile = header_nav.querySelector('.nav-mobile');
let sandwich = nav_mobile.querySelector('.sandwich');
let mobile_menu = header_nav.querySelector('.mobile-menu');
let header_logo = document.querySelector('.header__logo');

let delete_class = function (elem, class_name) {
  elem.classList.remove(class_name);
}
let add_class = function (elem, class_name) {
  elem.classList.add(class_name);
}


nav_mobile.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (sandwich.classList.contains('sandwich_active')) {
    delete_class(sandwich, 'sandwich_active');
    delete_class(header_logo, 'hidden');
    add_class(mobile_menu, 'hidden');
    document.querySelector('body').style.overflow = 'auto';
  }
  else {
    delete_class(mobile_menu, 'hidden');
    add_class(sandwich, 'sandwich_active');
    add_class(header_logo, 'hidden');
    document.querySelector('body').style.overflow = 'hidden';
    nav_mobile.style.position = 'absolute';
  }
});

let categories = document.querySelectorAll('.board-category')
let change_status = function (categories_array) {
  let categories_arr = categories_array;
  let delete_all = function (categories_array_1) {
    for (var i = 0; i < categories_array_1.length; i++) {
      if (categories_array_1[i].classList.contains('board-category__active')) {
        delete_class(categories_array_1[i], 'board-category__active');
      }
    };
  };
  let active_category = function (categories_array_1) {
    for (var j = 0; j < categories_array_1.length; j++) {
      let category = categories_array_1[j];
      category.addEventListener('click', function(evt) {
        evt.preventDefault();
        delete_all(categories_arr);
        add_class(category, 'board-category__active');
      });
    };
  };
  active_category(categories_arr);
}
change_status(categories);


let board_items = document.querySelectorAll('.board-item');
let sale_function = function(board_items_array) {
  for (var i = 0; i < board_items_array.length; i++) {
    let sale = board_items_array[i].querySelector('.sale');
    if (!board_items_array[i].classList.contains('with-sale')) {
      sale.style.display = 'none';
    }
    else {
      sale.style.display = 'block';
    }
  }
}
sale_function(board_items);

let authors = document.querySelectorAll('.review-author');
let text_blocks = document.querySelectorAll('.review-text__block');
let review_authors_function = function (author_array, texts_array) {
  for (var i = 0; i < author_array.length; i++) {
    let author = author_array[i];
    let text_block = texts_array[i];
    let author_image = author_array[i].querySelector('.review-author-image');
    author_image.addEventListener('click', function () {
      for (var j = 0; j < author_array.length; j++) {
        add_class(author_array[j], 'not-active');
        add_class(texts_array[j], 'hidden');
      }
      if (author_array[i] == author_array[0]) {
        var a = text_block.dataset.el;
        a.style.transform = 'translateX(-50px)';
      }
      delete_class(author, 'not-active');
      delete_class(text_block, 'hidden');
    });
  }
}
review_authors_function(authors, text_blocks);
