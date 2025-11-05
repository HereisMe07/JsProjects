// local reviews data
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "./img/person-1.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up."
    },
    {
        id: 2,
        name: "james",
        job: "Web Designer",
        img: "./img/person-2.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen."
    },
    {
        id: 3,
        name: "Marky",
        job: "Intern",
        img: "./img/person-3.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb."
    },
    {
        id: 4,
        name: "vitu",
        job: "The Boss",
        img: "./img/person-4.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan."
    },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person base on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
// This listens for a click event on the nextBtn button. 
nextBtn.addEventListener('click', function(){ //When clicked, it runs the code inside the { ... } block.
    // This increases the variable currentItem by 1 => Example: if currentItem was 2, now it becomes 3.
    currentItem = currentItem + 1;
    // This checks if currentItem goes past the last item in the reviews array.
    if(currentItem > reviews.length - 1){ // reviews.length - 1 is the index of the last item (since array indexes start at 0).
        // If currentItem is greater than that, it means you went past the end — so it resets back to 0 (the first person).
        currentItem = 0; // If it does, it resets currentItem to 0, so it loops back to the first item.
    }
    showPerson(currentItem); // This calls the showPerson function to update the displayed review based on the new currentItem value.
});

// show prev person
prevBtn.addEventListener('click', function(){
    currentItem = currentItem - 1;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});