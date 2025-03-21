  window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelectorAll(".move-image");
    const vinyl = document.querySelectorAll(".move-vinyl");

    for(let i=0; i <= image.length-1 && i <= vinyl.length-1; i++)
    {
      image[i].addEventListener("mouseenter", () => {
        image[i].classList.add("moveImage");
        vinyl[i].classList.add("moveVinyl");
      });
      image[i].addEventListener("mouseleave", () => {
        image[i].classList.remove("moveImage");
        vinyl[i].classList.remove("moveVinyl");
      });
      vinyl[i].addEventListener("mouseenter", () => {
        image[i].classList.add("moveImage");
        vinyl[i].classList.add("moveVinyl");
      });
      vinyl[i].addEventListener("mouseleave", () => {
        image[i].classList.remove("moveImage");
        vinyl[i].classList.remove("moveVinyl");
      });
    }
  });

  document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown

    if(isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if(dropdown === currentDropdown) return
      dropdown.classList.remove('active')
    })
  })