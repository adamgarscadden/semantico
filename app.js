(() => {
  // Select all drawer buttons and drawers
  const drawerButtons = document.querySelectorAll(".js-open-drawer");

  drawerButtons.forEach((drawerButton) => {
    const drawerId = drawerButton.getAttribute("aria-controls");
    const drawer = document.querySelector(`#${drawerId}`);
    const closeButton = drawer.querySelector(".js-close-drawer");

    // Open/close the drawer
    drawerButton.addEventListener("click", () => {
      const isExpanded = drawerButton.getAttribute("aria-expanded") === "true";
      drawerButton.setAttribute("aria-expanded", !isExpanded);
      drawer.hidden = isExpanded;
      drawer.classList.toggle("card-content--open", !isExpanded);
    });
  });
})();
