const likeButton = document.querySelectorAll('.like-button');

likeButton.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('like-active');
  })
});
