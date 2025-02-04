document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('light-theme');

    // Alterando ícone e texto do botão
    if (document.body.classList.contains('light-theme')) {
        this.innerHTML = "🌞";
    } else {
        this.innerHTML = "🌙";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const infoIcon = document.getElementById("info-icon");
    const tooltip = document.getElementById("tooltip");

    infoIcon.addEventListener("mouseenter", function (event) {
        tooltip.style.left = event.pageX + "px";
        tooltip.style.top = event.pageY + 25 + "px";
        tooltip.classList.add("show-tooltip");
    });

    infoIcon.addEventListener("mouseleave", function () {
        tooltip.classList.remove("show-tooltip");
    });
});