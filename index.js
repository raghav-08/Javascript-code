const stars = document.querySelectorAll('.fa-star');
const emoji = document.querySelectorAll(".far");
const colorsArray = ['red', 'orange', 'yellow', 'lightgreen', 'green'];

updateRating(0);

stars.forEach((stars,index) => {
    stars.addEventListener('click', () => {
        updateRating(index);
    })
})

function updateRating(index) {
    stars.forEach((stars, idx) => {
        if (idx <= index)
            stars.classList.add("active");
        else
            stars.classList.remove("active")
    });
    emoji.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = colorsArray[index];
    })
}