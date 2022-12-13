const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-menu");
const overlay = document.querySelector("#overlay");

 menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
    overlay.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
    overlay.style.display = 'none'
})
