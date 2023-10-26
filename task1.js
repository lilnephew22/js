const list = document.querySelectorAll("li");
const lastInd = list.length - 1;
const arrOfInd = [0, lastInd, 1, 3, 2];
arrOfInd.forEach((index) => {
    alert(list[index].textContent);
})