// Page transition animation for Homepage.html
window.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.page-transition-wrapper');
    if (wrapper) {
        wrapper.style.opacity = 0;
        setTimeout(() => {
            wrapper.style.opacity = 1;
        }, 50);
    }
});
