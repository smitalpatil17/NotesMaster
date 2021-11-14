console.log("Here is js code");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    // console.log(addTxt);
    let addTitle = document.getElementById("addTitle");

    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesobj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notesobj);
    showNotes();
});


function showNotes() {

    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="noteCard my-3 mx-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Note ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="delNote(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
          </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<h4>No notes added yet</h4>`;
    }
}

function delNote(index) {
    console.log("Reached in function");
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

let search = document.getElementById("searchtxt");
search.addEventListener("input", function () {
    let inputval = search.value;
    let notesCard = document.getElementsByClassName("noteCard");
    Array.from(notesCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputval)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }


    });

})

