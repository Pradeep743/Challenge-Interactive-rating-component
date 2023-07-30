const ratings = document.querySelectorAll('[type="radio"]');
const thankyou = document.querySelector('.thankyou-state');
const rating = document.querySelector('.rating-state');
const ratingSubmitted = document.querySelector('.user-submitted');

const button = document.querySelector('#submit')

let userRating = 0;

ratings.forEach(rating => {
    rating.addEventListener('click', e => {
        userRating = e.target.value;
    })
})

button.addEventListener('click', () => {
    thankyou.style.display = "block";
    rating.style.display = "none";
    ratingSubmitted.textContent = userRating;
})