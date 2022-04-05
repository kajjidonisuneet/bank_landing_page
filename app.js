function menuFunction() {
    navBox = document.querySelector('.nav-background');
    if(navBox.style.display === 'block') {
        navBox.style.display = "none";
    } else {
        navBox.style.display = "block";
    }
}
document.querySelector('.hamburger-icon').addEventListener('click', menuFunction);