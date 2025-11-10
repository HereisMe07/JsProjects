// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// Step 1: Select elements
const modalBtn = document.querySelector(".modal-btn");  // "Open modal" button
const modal = document.querySelector(".modal-overlay"); // Whole modal overlay
const closeBtn = document.querySelector(".close-btn");   // "X" close button

// Step 2: Add event listener for opening modal
modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal"); 
});
// Step 3: Add event listener for closing modal
closeBtn.addEventListener("click", function () {
   modal.classList.remove("open-modal"); 
});