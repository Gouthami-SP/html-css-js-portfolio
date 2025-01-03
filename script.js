const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}


const counterValue = document.getElementById('counter-value');

let visitCount = localStorage.getItem('visitCount');


if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}


localStorage.setItem('visitCount', visitCount);


counterValue.textContent = visitCount;

