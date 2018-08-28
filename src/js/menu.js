var openButton = document.querySelector('._open-menu');
var closeButton = document.querySelector('._close-menu');
var menu = document.querySelector('._menu');

openButton.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.add('active');
})

closeButton.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.remove('active');
})

body.addEventListener("click", function(e) {
  e.stopPropagation();
  menu.classList.remove('active');
});

menu.addEventListener("click", function(e) {
  e.stopPropagation();
});
