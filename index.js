var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

var sidemenu = document.getElementById("sidemenu")
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
sidemenu.style.right = "0";
}

function closemenu() {
sidemenu.style.right = "-200px";
}




const scriptURL = '<https://script.google.com/macros/s/AKfycbyJcbNakDvEB8vOe4gSQPeGsoW67h_L6Z1iipN5BQVYKimjz1R-Z-EF5s1Fsu2BhLBStw/exec>'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => console.log('Success!', response))
.catch(error => console.error('Error!', error.message))
})