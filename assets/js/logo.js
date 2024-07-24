// Get the logo image element
const LogoImg = document.getElementById('Logo-img');

// Add event listener to the window scroll event
window.addEventListener('scroll', () => {
    // Check if the window has scrolled past a certain point (in this case, 200px)
    if (window.scrollY > 200) {
        // Change the logo image src
        LogoImg.src = '../images/blanco.png';
    } else {
        // Change the logo image src back to the original
        LogoImg.src = '../images/azul.png';
    }
});