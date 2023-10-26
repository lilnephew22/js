const colorButtons = document.querySelector(".colors");
colorButtons.addEventListener('click', (e)=>{
    if (e.target.classList.contains("color")){
        const activeColor = document.querySelector(".colors .active");
        activeColor.classList.remove("active");
        e.target.classList.add("active");
        renderPrice();
    }
})
function renderPrice(){
    const price = document.getElementById("outprice");
    const activeColor = document.querySelector(".colors .active");
    price.innerText = activeColor.getAttribute("data-price");
}
renderPrice();
