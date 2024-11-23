export function setupSmoothScroll() {
  const navLinks = document.querySelectorAll(".site-header__nav-link");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        const headerHeight = 110;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}
