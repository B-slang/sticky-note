var noteList = [];
var noteListView = document.getElementById("noteList");

/* Add Note Handler function.
* This function is to add & edit note.
*/

const addNewNote = (e,i)=> {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const newNote = {title:title,description:description};

  if(e){
    noteList[i] = newNote;
  }else{
    noteList.push(newNote);
  }
  updateListView();
  hidePopupView();
};


/*
* Edit Note Handler function
* This function is to edit note based on index that have been passed
* and update the view as refesh after removing from the list
* also linked with addNewNote function to utalize the actions
*/
const editNote = (e)=>{
  document.getElementById('title').value = noteList[e].title;
  document.getElementById('description').value = noteList[e].description;
  document.getElementById("btnAdd").onclick = function () { addNewNote(true,e); };
  document.getElementById("btnAdd").innerHTML = "Edit";
  showPopupView();

}

/*
* Delete Note Handler function
* This function is to remove note based on index that have been passed
* and update the view as refesh after removing from the list
*/
const deleteNote = (e) =>{
  noteList.splice(e,1);
  updateListView();
}

/*
//TODO: need to implement
* Save Notes Handler function
*/
const saveNote = ()=>{

}
/*
// TODO: need to implement
 const filterNote = ()=>{

 }
*/
/*
* Show PopUp view handler
* This function is to show popup.
*/
const showPopupView =()=> {
  let notePopupView = document.getElementById("notePopupView");
  notePopupView.style.display = "block";
}

/*
* Hide PopUp view handler
* This function is to hide popup.
*/
const hidePopupView =()=> {
  let notePopupView = document.getElementById("notePopupView");
  document.getElementById('title').value = "";
  document.getElementById('description').value = "";
  document.getElementById("btnAdd").onclick = function () { addNewNote(false,-1); };
  notePopupView.style.display = "none";
}


/*
* Update Note listing View handler function
* This function is to update Note items.
*/
const updateListView = ()=>{
  clearListView();
  noteList.forEach(function(e,i){
    let note = document.createElement("div");
    note.setAttribute("id",i);
    note.className = "note-item";

    let noteTitle = document.createElement("div");
    noteTitle.textContent = e.title;
    noteTitle.className = "note-title";

    let noteDescription = document.createElement("div");
    noteDescription.textContent = e.description;
    noteDescription.className = "note-description";

    let editDeleteButtons = document.createElement("div");
    editDeleteButtons.innerHTML = '<div class="row"><button class="btn" onclick="editNote('+i+')"> Edit </button> &nbsp;<button class="btn" onclick="deleteNote('+i+')"> Delete </button></div>';

    note.appendChild(noteTitle);
    note.appendChild(noteDescription);
    note.appendChild(editDeleteButtons);

    noteListView.appendChild(note);

  });
}

/*
* Clear Note listing view
* This function is to update Note items.
*/
const clearListView =()=>{
  noteListView.innerHTML = "";
}