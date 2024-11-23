export function setupDrawers() {
  const drawerButtons = document.querySelectorAll(".js-open-drawer");

  drawerButtons.forEach((drawerButton) => {
    const drawerId = drawerButton.getAttribute("aria-controls");
    const drawer = document.querySelector(`#${drawerId}`);

    drawerButton.addEventListener("click", () => {
      const isExpanded = drawerButton.getAttribute("aria-expanded") === "true";
      drawerButton.setAttribute("aria-expanded", !isExpanded);
      drawer.hidden = isExpanded;
      drawer.classList.toggle("feature-cards__content--open", !isExpanded);
    });
  });
}
