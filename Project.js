
window.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.page-transition-wrapper');
    if (wrapper) {
        wrapper.style.opacity = 0;
        setTimeout(() => {
            wrapper.style.opacity = 1;
        }, 50);
    }
});
document.addEventListener("DOMContentLoaded", () => {

    const projects = [

        {

            title:"Online Ordering System for Juris Bay Foods",

            description:"This is our project for our capstone where we created a system for Juris Bay Foods. The system can manage orders, inventory, sales records, and provides an online platform for customers to use.",

            tools:"Visual Studio Code, MySQL, Node.js",

            link:"https://github.com/Haydn-V/Mini_Capstone"

        },

        {

            title:"Enrollment Form Activity",

            description:"This project is about creating an enrollment form through the use of HTML and inline CSS. We used images and videos provided to us in the handouts.",

            tools:"Visual Studio Code",

            link:"https://github.com/Haydn-V/EnrollmentForm"

        },

        {

            title:"Woman With Basket",

            description:"This project is about fixing the whole picture by piecing together a collection of images to make the picture whole using CSS Grid Template Layout.",

            tools:"Visual Studio Code",

            link:"https://github.com/Haydn-V/Woman-with-basket"

        }

    ];

    function showProject(index){

        const project = projects[index];

        document.getElementById("project-content").innerHTML =

        `
        <h1>${project.title}</h1>

        <h3>Brief Description</h3>

        <p>${project.description}</p>

        <h3>Tools and Technologies Utilized</h3>

        <p>${project.tools}</p>

        <h3>Repository Link</h3>

        <a href="${project.link}" target="_blank">
            View Repository
        </a>
        `;

        document.querySelectorAll(".project-item")
        .forEach(item => item.classList.remove("active"));

        document.querySelector(`.project-item[data-index="${index}"]`)
        .classList.add("active");
    }

    const items = document.querySelectorAll(".project-item");

    items.forEach(item => {

        item.addEventListener("click", () => {

            const index = item.getAttribute("data-index");

            showProject(index);

        });

    });

    showProject(0);

});