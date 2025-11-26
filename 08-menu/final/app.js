const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/menu-item.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/menu-item.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/menu-item.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/menu-item.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/menu-item.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/menu-item.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/menu-item.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/menu-item.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/menu-item.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/menu-item.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// get parent element // Select HTML Elements
const sectionCenter = document.querySelector(".section-center"); // grabs the container where food items will show.
const btnContainer = document.querySelector(".btn-container"); // grabs the container where filter buttons will show.
// These are references to your HTML elements so JS can change them.

// display all items when page loads // When page loads, show menu and buttons
window.addEventListener("DOMContentLoaded", function () { // runs the code after HTML has fully loaded.
    displayMenuItems(menu); // Show all menu items
    displayMenuButtons(); // Show all buttons
});

// Function: displayMenuItems()
function displayMenuItems(menuItems) { // Loops through the array you pass (menuItems):
  let displayMenu = menuItems.map(function (item) { // map() → loops through every item in the array and returns an HTML string for each.
    // console.log(item);
    // Creates HTML for each item (<article> with image, title, price, desc)  & ${item.price} = insert data from the object
    return `<article class="menu-item">  
            <img src="${item.img}" alt="${item.title}" class="photo" /> 
            <div class="item-info" >
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>`
  });
  displayMenu = displayMenu.join(""); // map() returns an array of strings, we use join("") to combine into one big string.
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu; // innerHTML : inserts all items into the page
}

// Function: displayMenuButtons()
function displayMenuButtons() { // Function: displayMenuButtons()This function automatically creates buttons based on categories.
  // Finds all categories in your menu array:
  const categories = menu.reduce( // Loops through the menu array and creates a list of unique categories.
    function (values, item) {
      if (!values.includes(item.category)) { // Adds the category only if it’s not already in the list.
        values.push(item.category);
      }
      return values;
    },["all"] // start with “all” as the first button.
  );

  // Creates HTML buttons for each category:
  const categoryBtns = categories // Create buttons for each category
    .map(function (category) { // map() creates a button for each category.
      return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`; // stores the category in the button → used later for filtering.
    })
    .join(""); // combines all button HTML into one string.
  // Inserts buttons into the page
  btnContainer.innerHTML = categoryBtns;

  // Selects all buttons we just created.
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);
  // Adds click events to filter items based on button clicked:
  filterBtns.forEach(function (btn) { // loop through each button
    btn.addEventListener("clokick", function (e) { // Add event listener(click) to each button || e means event => contains information about what was clicked.
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id; // gets the category from data-id attribute
      // Filters the menu array → only items that match this category.
      const menuCategory = menu.filter(function (menuItem) { // Filter = Keep only items that match the condition.
        // In JavaScript, you filter array → remove items that don’t match.
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // If “all” button clicked → show everything.
      if (category === "all") {
        displayMenuItems(menu);
      } else { // Else → show only the filtered items.
        displayMenuItems(menuCategory);
      }
    });
  })
}