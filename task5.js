const circles = document.querySelectorAll(".circle");
circles.forEach(function (circle) {
    const dataAnim = circle.getAttribute("data-anim");
    circle.classList.add(dataAnim);

    circle.addEventListener("animationend",function () {
        alert(`Animation '${dataAnim}' finished.`)
    });
});