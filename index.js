const toDo = document.querySelector("#todo");
const btn = document.getElementById("button");
const inputField = document.getElementById("inp");
const newList = document.getElementById("new");

btn.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("new-paragraph");
    paragraph.innerText = inputField.value;
    toDo.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through"
    });
    paragraph.addEventListener("dblclick", function(){
        toDo.removeChild(paragraph)
    });
})