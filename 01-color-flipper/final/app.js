const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// btn → selects the button element with id="btn" (the one you’ll click).
const btn = document.getElementById("btn");
// color → selects the element with class color (used to display the color name or value).
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}