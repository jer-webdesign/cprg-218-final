const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Highlight active menu link on click
document.querySelectorAll('nav .nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('nav .nav-links a').forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});

// Keep active menu link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav .nav-links a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
  

function addToCart() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

const modal = document.getElementById("modal");
const closeModal = document.getElementsByClassName("close")[0];
const continueShopping = document.getElementById("continue-shopping");

closeModal.onclick = function() {
    modal.style.display = "none";
}

continueShopping.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function moveSlide(direction) {
    const slider = document.getElementById('book-slider');
    const bookWidth = slider.querySelector('.book').offsetWidth;
    slider.scrollLeft += direction * bookWidth;
}



