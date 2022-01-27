const MENU_HOME = document.getElementById('menu-home');
const MENU_ABOUT = document.getElementById('menu-about');
const MENU_RESUME = document.getElementById('menu-resume');
const MENU_SERVICES = document.getElementById('menu-services');
const MENU_CONTACT = document.getElementById('menu-contact');

calculActiveMenu();

window.addEventListener('scroll', (elem) => {
    calculActiveMenu();    
})

function calculActiveMenu() {
    MENU_HOME.classList.remove('active');
    MENU_ABOUT.classList.remove('active');
    MENU_RESUME.classList.remove('active');
    MENU_SERVICES.classList.remove('active');
    MENU_CONTACT.classList.remove('active');

    const pourcentageScroll = window.scrollY * 100 / window.innerHeight;

    if (pourcentageScroll < 100) {
        return MENU_HOME.classList.add('active');
    }
    if (pourcentageScroll < 200) {
        return MENU_ABOUT.classList.add('active');
    }
    if (pourcentageScroll < 300) {
        return MENU_RESUME.classList.add('active');
    }
    if (pourcentageScroll < 400) {
        return MENU_SERVICES.classList.add('active');
    }
    return MENU_CONTACT.classList.add('active');
}