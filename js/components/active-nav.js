export function setupActiveNav() {
  const navLinks = document.querySelectorAll(".site-header__nav-link");
  const sections = document.querySelectorAll("section");

  function clearActiveLinks() {
    navLinks.forEach((link) =>
      link.classList.remove("site-header__nav-link--active")
    );
  }

  window.addEventListener("scroll", () => {
    let currentSectionId = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 110;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY + 1 >= sectionTop && window.scrollY < sectionBottom) {
        currentSectionId = section.id;
      }
    });

    if (currentSectionId) {
      clearActiveLinks();
      const activeLink = document.querySelector(
        `a[href="#${currentSectionId}"]`
      );
      if (activeLink) {
        activeLink.classList.add("site-header__nav-link--active");
      }
    } else {
      clearActiveLinks();
    }
  });
}
