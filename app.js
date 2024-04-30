function addTodo(){
    var input=document.getElementById("todoInput")
    console.log(input.value);

    var liElement=document.createElement("li")
    var liText=document.createTextNode(input.value)
    liElement.appendChild(liText)
    
    var list=document.getElementById("list")
    list.appendChild(liElement)

    var EditBtnELement = document.createElement("button");
    var EditBtnText = document.createTextNode("Edit");
    EditBtnELement.appendChild(EditBtnText);

    
   var DeleteBtnELement = document.createElement("button");
   var DeleteBtnText = document.createTextNode("Delete");  
   DeleteBtnELement.appendChild(DeleteBtnText);

   liElement.appendChild(EditBtnELement);
   liElement.appendChild(DeleteBtnELement);

   EditBtnELement.setAttribute("class", "Editbtn");
  DeleteBtnELement.style.backgroundColor = "red";

  input.innerHTML=""
}

function deleteAll() {
    var list = document.getElementById("list");
    list.innerHTML = "";
  }
  
