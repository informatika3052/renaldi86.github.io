const menuToggle = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.sidebar ul');
const header = document.querySelector('header');


menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slider');
    header.classList.toggle('slider');
    menuToggle.classList.toggle('close');
    closeSideBar.classList.toggle('muncul');

});


// close Sidebar
const closeSideBar = document.querySelector('.close-sidebar');

closeSideBar.addEventListener('click', function () {
    nav.classList.remove('slider');
    closeSideBar.classList.remove('muncul');

});


// Scroll click nav

const links = document.querySelectorAll(".sidebar a")

links.forEach(function (i) {
    i.addEventListener('click', clickHandler);

});

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
    nav.classList.remove('slider');
    header.classList.remove('slider');
    closeSideBar.classList.remove('muncul');

}




// Button Scroll Top


const scroll = document.querySelector('.scroll-top');

scroll.addEventListener('click', function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroll.style.display = "block";


    } else {
        scroll.style.display = "none";
    }

}


// Event Scroll main

const main = document.getElementById('main');
function effectScroll() {

    let introPort = main.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (introPort < screenPosition) {
        main.classList.add('up');
    }

}
window.addEventListener('scroll', effectScroll);

//Event Scroll pricelist
const pricelist = document.querySelector('.pricelist');

function pricelistScroll() {
    let introPort = pricelist.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;
    if (introPort < screenPosition) {
        pricelist.classList.add('up');
    }
}
window.addEventListener('scroll', pricelistScroll);