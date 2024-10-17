// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// When Coffe-menu is clicked
document.querySelector('#Coffe-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const Coffe = document.querySelector ('#Coffe-menu');

document.addEventListener('click', function(e){
    if(!Coffe.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
