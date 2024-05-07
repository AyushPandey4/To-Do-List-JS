let input = document.getElementById("input");
let ul = document.getElementById("ul");

function add(){
if(input.value == ''){
    alert("please enter any thing!!");
}else{
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
    input.value = '';
}
ul.addEventListener('click',function (e) {
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();   
}
},false);
