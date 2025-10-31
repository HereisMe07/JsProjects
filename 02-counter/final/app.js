// set inital value to zero It’s a variable that will change when you click the buttons.
let count = 0;
// select value and buttons (Select elements from the HTML)
const value = document.querySelector("#value"); // value → the element that displays the number on the screen. #value → means: “Find the element with id="value"”
// btns → selects all buttons that have the class "btn".=>.btn → means: “Find all elements with class="btn"”
const btns = document.querySelectorAll(".btn");
// “Go through every button in btns, and run this function on each one.”
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) { //addEventListener("click", ...) → runs the function when the user clicks the button.
        const styles = e.currentTarget.classList; // e.currentTarget → is the button that was clicked. => .classList → gives you all the CSS classes attached to that button (e.g. "btn decrease").
        if (styles.contains("decrease")) { // If button has .decrease → subtract -1
            count--;
        } else if (styles.contains("increase")) { // If button has .increase → add +1
            count++;
        } else { // Else (which means .reset) → set count back to 0
            count = 0;
        }

        if (count > 0) { // Positive count → green
            value.style.color = "green";
        }
        if (count < 0) { // Negative count → red
            value.style.color = "red";
        }
        if (count === 0) { // Zero → black
            value.style.color = "black";
        }
        value.textContent = count; // Update the value on the screen
    });
});