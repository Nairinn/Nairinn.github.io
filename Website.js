// Get all navigation items and corresponding content sections
const navItems = document.querySelectorAll('.nav-item');
const navContents = document.querySelectorAll('.nav-content');

// Function to show content for a selected item
function showContent(index) {
    navContents.forEach((content, i) => {
        if (i === index) {
            content.style.display = '';
        } else {
            content.style.display = 'none';
        }
    });
}
showContent(0);
// Add event listeners to each navigation item for click
navItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        showContent(index);
    });
});

  
  // JavaScript code to handle the click event on navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    const body = document.body;

    navItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            // Remove any inline background color style from the body
            body.style.backgroundColor = "";

            // Determine the active section based on the clicked navigation link
            const activeColor = this.getAttribute("active-color");

            // Set the background color of the body to the active color
            body.style.backgroundColor = activeColor;
        });
    });
});
