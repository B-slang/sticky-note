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
