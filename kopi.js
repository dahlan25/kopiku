const navbarnav =document.querySelector('.navbar-nav');

const burger = document.querySelector('#hamburger-menu');


burger.onclick = () => {
    navbarnav.classList.toggle('active');
};



document.addEventListener('click', function(e) {
    if(!burger.contains(e.target) && !navbarnav.contains(e.target) ){
        navbarnav.classList.remove('active');
    }
});