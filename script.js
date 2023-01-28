const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
    const nav = document.querySelector(".nav-item")
    nav.classList.toggle('ativo');
}

btnMobile.addEventListener('click', toggleMenu);