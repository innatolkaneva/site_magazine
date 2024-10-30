const menuActive = document.querySelector('.menu_list');
const burger = document.querySelector('.icon_menu');
function toggleMenu() {
    menuActive.classList.toggle('hidden');
}
burger.addEventListener('click', toggleMenu)