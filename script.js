(() => {
  const toggleButtons = document.querySelectorAll(".js-dropdown-toggle");
  Array.from(toggleButtons).forEach((button) => {
    button.addEventListener("click", () => {
      const menu = button.nextElementSibling;

      menu.classList.toggle("visible");
    });
  });
})();
