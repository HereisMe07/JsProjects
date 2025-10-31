const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// btn → selects the button element with id="btn" (the one you click).
const btn = document.getElementById("btn");
// color → selects the element that displays the color code (like <span class="color">#f1f5f8</span>).
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexColor = '#';
    // Use a for loop to generate 6 random characters:
   for (let i = 0; i < 6; i++) {  //The loop runs 6 times (for 6 characters).
        hexColor += hex[getRandomNumber()]; //Each time, it picks a random value from the hex array.
    } // It keeps adding those characters to hexColor.
    // console.log(hexColor);

    color.textContent = hexColor; //changes the text shown on the page.
    document.body.style.backgroundColor = hexColor; //updates the background color.
});
// Math.random() → gives a random number between 0 and 1.
function getRandomNumber() {
    // Math.floor() removes decimals → gives an integer between 0 and 15.?
    return Math.floor(Math.random() * hex.length); // Multiply by hex.length (which is 16).
}