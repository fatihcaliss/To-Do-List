const input = document.getElementById('inputText');
const button = document.querySelector('#btn');
const list = document.querySelector('.list');

// const removeBtn = `<button class="removeButton"> REMOVE </button>`

button.addEventListener('click', addToList);

// list.addEventListener('click', (e) => {
//     if (e.target.parentElement != list && e.target.parentElement != list.parentElement) {
//         e.target.parentElement.remove();
//     }
// });

list.addEventListener('click', (e) => {
    if (e.target.innerText == "REMOVE") {
        // console.log(e.target.parentElement.firstElementChild.classList.contains('symbol'));
        if (e.target.previousElementSibling.previousElementSibling.classList.contains("symbol")) {
            e.target.parentElement.remove();
        }else{
            alert("Please click symbol before to remove")
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
        let element = document.createElement('div');
        element.classList.add('contentText');
        element.innerHTML = `<span>&#x26AA;</span><p>${input.value}</p><button class="button-55"> REMOVE </button>`
        list.appendChild(element);
        input.value = ""
    }
    else (
        alert("Please type a to do...")
    )
};
