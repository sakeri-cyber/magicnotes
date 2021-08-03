//if some one adds anything on add notes, it should be added to the local storage.
//console.log('Welcome to Notes App!! This is app.js');
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let str = "";
    notesObj.forEach(function (element, index) {
        str += `
            <div class="card mx-2 my-2" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
                </div>
              </div> 
        `;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = str;
    }
    else {
        notesElm.innerHTML = `Nothing to show... Add your first node!!`
    }
}

function deleteNote(index) {
    console.log('I am deleting', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}
let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener("input", function () {
    let inputVal = searchTxt.value.toLowerCase();
    console.log(inputVal);
    let cards = document.getElementsByClassName('mx-2');
    Array.from(cards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        //console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        
    })
});
