fetch("navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;

    const panel = document.getElementById("panel");
    const items = document.querySelectorAll(".menu-item");
    const navbar = document.querySelector(".navbar-custom");

    if (navbar) {
        navbar.style.opacity = 0;
        setTimeout(() => {
            navbar.style.opacity = 1;
        }, 50);
    }

    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const bg = item.dataset.bg;
            const color = item.dataset.color;
            panel.style.backgroundImage = `url('${bg}')`;
            items.forEach(link => {
                link.style.color = "white";
            });
            item.style.color = color;
        });

        item.addEventListener("click", function(e) {
            e.preventDefault();
            const wrapper = document.querySelector('.page-transition-wrapper');
            if (!navbar) {
                window.location.href = item.getAttribute("href");
                return;
            }
            navbar.classList.add("navbar-fade-out");
            if (wrapper) {
                wrapper.classList.add("page-fade-out");
            }
            setTimeout(() => {
                window.location.href = item.getAttribute("href");
            }, 400); 
        });
    });
});