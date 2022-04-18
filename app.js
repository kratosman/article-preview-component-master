var open = document.getElementById("btn-open");
var show = document.getElementById("myTooltip");

open.addEventListener('click', () => {
    show.classList.toggle("show-open");
    show.classList.toggle("active");
});