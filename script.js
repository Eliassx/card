const likeButton = document.getElementById('btn');
const counterLike = document.getElementById('counter');
let counter = 0;

likeButton.addEventListener('click', () => {
    counterLike.innerHTML = ++counter
    likeButton.style.border = "2px solid red"
    likeButton.style.color = "red"
})