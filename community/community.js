/////////////////////CLOUSURE EXEMPLES///////////////////////////////////////
function myFunction() {
    var trigger = document.getElementById("trigger");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (trigger.style.display === "none") {
        trigger.style.display = "inline";
      btnText.innerHTML = "Læs mere"; 
      moreText.style.display = "none";
    } else {
        trigger.style.display = "none";
      btnText.innerHTML = "Læs mindre"; 
      moreText.style.display = "inline";
    }
  }



///////////// Event Bubbling// Smecherie de sters un element prin adaugarea unui event la parinte////

const cont = document.querySelector("#comments-list ul div");
const comment = document.querySelector('#li');
cont.addEventListener("click", function (e) {
    if (e.target.className == "delete") {
        let li = e.target.parentElement;

        cont.removeChild(li);
        cont.removeChild(comment);


    }
})

///heart

function ani() {
    document.querySelector('.likes').className = 'heart';


    let number = document.querySelector(".countLikes").innerHTML = 1;

    console.log(number);
}

//// Interacting with forms/////

const form = document.forms["add-comment"];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const addbook = form.querySelector('input[type="text"]').value;

    //////create elements
    //div
    let newDiv = document.createElement("div");
    //li
    let newLi = document.createElement("li");
    newLi.id ="li";
    //span text
    let textBook = document.createElement("span");
    //span Button
    let delButton = document.createElement("div");

    //like contoner
    let likeBox = document.createElement("div");
    //onclick
    let onClickButton = document.createElement("span");
    //coment like
    let img = document.createElement("img");

    let likeNumb = document.createElement("span");
    let likeText = document.createElement("span");
    let joinComm = document.createElement("div");

    //add src to img
    img.src = "/assets/heart.png";
    //add clsses
    newDiv.classList.add("art-holder");
    textBook.classList.add("name");
    delButton.classList.add("delete");


    //
    img.classList.add("likes");
    likeBox.classList.add("like-box");

    likeNumb.classList.add("likeBoxJS")
    joinComm.classList.add("ConvBox");

    //like buttons


    /// Text 
    let textLi = document.createTextNode(addbook);
    let delButnText = document.createTextNode("fjern");
    let textNumb = document.createTextNode("0");
    let textLike = document.createTextNode("Like");
    let textjoinComm = document.createTextNode("Join Conversation")

    //Apend text to span
    textBook.appendChild(textLi)
    likeText.appendChild(textLike);
    likeNumb.appendChild(textNumb);
    joinComm.appendChild(textjoinComm);

    //apend text to button
    delButton.appendChild(delButnText);

    onClickButton.appendChild(img);
    likeBox.appendChild(onClickButton);
    likeBox.appendChild(likeNumb);
    likeBox.appendChild(likeText);


    img.addEventListener('click', function (e) {
        img.classList = "heart";
        likeNumb.innerHTML = "1";
    })



    //append the spans to the <li> element
    newLi.appendChild(textBook);
    newDiv.appendChild(newLi);
    newDiv.appendChild(joinComm);
    newDiv.appendChild(delButton);
    newDiv.appendChild(likeBox);
    ///apend li to ul

    cont.appendChild(newDiv);

    newDiv.addEventListener("click", function (e) {
        if (e.target.className == "delete") {
            let li = e.target.parentElement;

            newDiv.removeChild(newLi);
            newDiv.removeChild(joinComm);


        }
    })




})

const firstForm = document.forms[0];
const serch = firstForm.querySelector('input[type="text"]').value;





//filtrer books

const serchBar = document.forms['search-comments'].querySelector('input');
serchBar.addEventListener('keyup', function (e) {

    const term = e.target.value.toLowerCase();
    const booksLi = cont.getElementsByTagName('li');


    Array.from(booksLi).forEach(function (book) {

        const texLi = book.firstElementChild.textContent;

        if (texLi.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';

        } else {
            book.style.display = 'none'
            document.querySelector(".ConvBox").style.display = "none";


        }
    })
})