window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  var image = document.querySelector(".bioimg");
  image.classList.toggle("sticky", window.scrollY > 0);
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