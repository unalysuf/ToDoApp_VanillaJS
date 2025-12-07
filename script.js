const ulElement = document.querySelector("#list-container");
const inputBox = document.getElementById("input-box");

function AddTask () {

    if(inputBox.value === "") {
        alert("You have to write something!")
    } else {
        const newListelement = document.createElement("li");
        newListelement.innerHTML = inputBox.value;
        ulElement.appendChild(newListelement);
        let spanCloseElement = document.createElement("span");
        // Unicode of x (multiplication sign)
        spanCloseElement.innerHTML = "\u00d7";
        newListelement.appendChild(spanCloseElement);
        
    }

    inputBox.value = "";
    keepData();
}


//When the user press Enter instead of click on the Add button
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        AddTask();
    }
});

ulElement.addEventListener("click", (e) => {
    // tagName always returns the uppercase HTML tag of the clicked element.
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        keepData();
      // to remove the task from UI.
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        keepData();
    }
});


// Usage of localStorage object: it allows you to save key/value pairs in the browser
// Note : The localStorage object stores data with no expiration date ( Data is not deleted when the browser is closed)
// You can use the sessionStorage Object to store data for one session. 
// To clear local storage use "localStorage.clear();"
function keepData() {
    localStorage.setItem("data", ulElement.innerHTML);
}

function showData() {
    ulElement.innerHTML = localStorage.getItem("data");
}

showData();


