//Bei CLICK auf den Button, soll der Text aus dem Feld unten in die Liste eingefügt
//werden

//Test um zu sehen ob CLICK funktioniert
document.getElementById("Button").addEventListener("click", function(){
    console.log("CLICK");
});



//Definition der Funktion addToDo
function addToDo(){
    //Text aus Formular wird abgegriffen un der var iputText übergeben
    var inputText = document.getElementById("Input").value; 
    //var newItem wird erstellt und erstellt ein neues listItem
    var newItem = document.createElement("newListItem");
    // es bekommt die gleiche Klasse wie das bestehende. Für Styling usw...
    newItem.classList.add("list-group-item");
    // das neue ListItem bekommt nun den Text der Variable inputText
    newItem.innerText = inputText;
    // Der Liste wird nun ein neues Child hinzugefüt. --> newItem
    document.getElementById("List").appendChild(newItem);
    //Text im Eingabefeld danach löschen
    document.getElementById("Input").value = "";
}

