const inputBOX = document .getElementById("input-box");
const listcontainer= document .getElementById("list-container");

 
function addTask(){
    if(inputBOX.value === ''){
        alert("you must write something!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBOX.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }

    inputBOX.value = "";
    saveData();

}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");  
        saveData(); 
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innnerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();