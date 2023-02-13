const containerCls =document.getElementById('container')
const pTag=document.createElement("P")

function addChilds(){
    const pTag = document.createElement("P");
    containerCls.appendChild(pTag)
}
function removeChilds() {
    const pTag=document.querySelector("p")
  containerCls.removeChild(pTag)
}
let value = 0;
function changeColor() {
  containerCls.style.backgroundColor = `rgb(${value+=10} ${value} ${value})`;
}