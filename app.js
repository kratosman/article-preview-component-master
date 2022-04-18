var open = document.getElementById("btn-open");
var show = document.getElementById("myTooltip");

open.addEventListener('click', () => {
    show.classList.toggle("show-open");
    show.classList.toggle("active");
});

// window.onclick = function(e) {
//     if (e.target == show) {
//         console.log(show.style.display = "none");
//     }
// }