const input = document.getElementById('inputText');
const button = document.querySelector('#btn');
const list = document.querySelector('.list');

button.addEventListener('click', addToList);

list.addEventListener('click', (e) => {
    if (e.target.innerText == "REMOVE") {
        
        if (e.target.previousElementSibling.previousElementSibling.classList.contains("symbol")) {
            e.target.parentElement.remove();
        }else{
            alert("Please click ⚪ (symbol)  before to remove")
        }
    }
    else if (e.target.innerText == "⚪") {
        e.target.innerText = "✔";
        e.target.nextElementSibling.style.textDecoration = "line-through";
        e.target.classList.add('symbol');
    }
    else if (e.target.innerText == "✔") {
        e.target.nextElementSibling.style.textDecoration = "none";
        e.target.innerText = "⚪";
        e.target.classList.remove('symbol');
    }
});

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addToList();
    }
})

function addToList() {
    if (input.value != "") {
        let date = new Date(); //this five line part for adding date
        let options = {    weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric"};
        let shortDate =  date.toLocaleDateString("en", options)
        let element = document.createElement('div');
        element.classList.add('contentText');
        element.innerHTML = `<span class="whiteBall">&#x26AA;</span><p>${input.value}</p>
        <div class="rght"><p class="date">${shortDate}</p> <button class="button-55"> REMOVE </button></div>`
        list.appendChild(element);
        input.value = ""
    }
    else (
        alert("Please type a to do...")
    )
};
