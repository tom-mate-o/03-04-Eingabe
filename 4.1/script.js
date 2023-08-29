

document.getElementById("Button").addEventListener("click", function(){
    console.log("KLICK");
});


function addToDo(){
    var x = document.getElementById("Input").value;
    document.getElementById("listItem").innerText= x;
}

