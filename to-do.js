var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('list_todos'))||[];

function renderToDo() {
    listElement.innerHTML = '';

    for (toDo of toDos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(toDo);
        var linkElement = document.createElement('a')
        var linkText = document.createTextNode('Excluir')

        linkElement.setAttribute('href', "#")

        var pos = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');


        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

function addToDo() {
    var toDoText = inputElement.value;
    toDos.push(toDoText);
    inputElement.value = "";
    renderToDo();
    saveToStorage();
}

function deleteToDo(pos) {
    toDos.splice(pos, 1);
    renderToDo();
    saveToStorage();
}

function saveToStorage(){


    localStorage.setItem('list_todos',JSON.stringify(toDos));
}

buttonElement.onclick = addToDo;
renderToDo();