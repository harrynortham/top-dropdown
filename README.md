# top-dropdown

Reusable dropdown menu

[https://harrynortham.github.io/top-dropdown/](https://harrynortham.github.io/top-dropdown/)

# Script

(() => {
const toggleButtons = document.querySelectorAll(".js-dropdown-toggle");
Array.from(toggleButtons).forEach((button) => {
button.addEventListener("click", () => {
const menu = button.nextElementSibling;

      menu.classList.toggle("visible");
    });

});
})();

# HTML

 <nav class="js-dropdown">
      <button class="js-dropdown-toggle">Toggle Dropdown</button>
      <div class="js-dropdown-menu">
        <ul>
          <li><a href="">Edit</a></li>
          <li><a href="">Copy</a></li>
          <li><a href="">Delete</a></li>
        </ul>
      </div>
    </nav>
