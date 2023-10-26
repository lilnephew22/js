const mainElem = document.createElement("main");
mainElem.classList.add("mainClass", "check", "item");
const divElem = document.createElement("div");
divElem.setAttribute("id", "myDiv");
const par = document.createElement("p");
par.textContent =  'First paragraph';
mainElem.append(divElem);
mainElem.append(par);
document.body.append(mainElem);