// Page transition animation for About.html
window.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.page-transition-wrapper');
    if (wrapper) {
        wrapper.style.opacity = 0;
        setTimeout(() => {
            wrapper.style.opacity = 1;
        }, 50);
    }
});
function showSection(sectionId, button){


    const sections = document.querySelectorAll(".content-box");

    sections.forEach(section => {

        section.classList.remove("active-section");

    });

    const buttons = document.querySelectorAll(".info-btn");

    buttons.forEach(btn => {

        btn.classList.remove("active-btn");

    });


    document.getElementById(sectionId)
    .classList.add("active-section");


    button.classList.add("active-btn");

}