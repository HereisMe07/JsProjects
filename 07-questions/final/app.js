//using selectors inside the element
const questions = document.querySelectorAll(".question"); //👉 This gives you a NodeList of all FAQ question blocks.

// 👉 You are looping one by one through each .question.
questions.forEach(function (question) { // question = the current question element.
   // inside each .question, there is a .question-btn
   const btn = question.querySelector(".question-btn");
   // console.log(btn);

   btn.addEventListener("click", function () { // When user clicks this button → run the function
      // console.log(question);
   
      questions.forEach(function (item) {
         if (item !== question) {
            item.classList.remove("show-text");
         }
      });
      // First click = turn ON && Second click = turn OFF
      question.classList.toggle("show-text"); // The code adds a class called "show-text" 👉 That class makes the answer appear
      // If .show-text NOT there → ADD it→ Answer becomes visible.
      // If .show-text there → REMOVE it → Answer becomes invisible.
   });
});