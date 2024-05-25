function addTodo(){
    var input=document.getElementById("todoInput")

    console.log(input.value);

    var list=document.getElementById("list")
    list.innerHTML+=`<li>${input.value}
    <button class="editbtn" onclick="editItem(this)">Edit</button>
    <button class="dltbtn" onclick="deleteItem(this)">Delete</button>
    </li>`

    // var liElement=document.createElement("li")

    // var liText=document.createTextNode(input.value)

    // liElement.appendChild(liText)
    
    // var list=document.getElementById("list")

    // list.appendChild(liElement)

    // var EditBtnELement = document.createElement("button");

    // var EditBtnText = document.createTextNode("Edit");
    
    // EditBtnELement.appendChild(EditBtnText);

    
  //  var DeleteBtnELement = document.createElement("button");
   
  //  var DeleteBtnText = document.createTextNode("Delete");  
   
  //  DeleteBtnELement.appendChild(DeleteBtnText);


  //  liElement.appendChild(EditBtnELement);
  //  EditBtnELement.setAttribute("onclick","editItem(this)")
   
  //  liElement.appendChild(DeleteBtnELement);
  //  DeleteBtnELementBtnELement.setAttribute("onclick","deleteItem(this)")
   

  //  EditBtnELement.setAttribute("class", "Editbtn");
  

  
   
   input.value=""
  }

function deleteAll() {
    
  var list = document.getElementById("list");
    
    list.innerHTML = "";
  }

function editItem(e){
  
  var updatedValue=prompt("Enter the updated value...")
  
  e.parentNode.firstChild.nodeValue=updatedValue
} 

function deleteItem(e){
  e.parentNode.remove()
}
  
