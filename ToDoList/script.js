//zmienne globalne
let $todoInput; // miejsce gdzzie uzytkownik wpisuje tresc
let $alertInfo; // info o braku zadań / koniecznosci dodania tekstu 
let $addBtn; // przycisk add - dodaje nowy element do list
let $ulList; // lista zadan, tagi <ul> 
let $newTask; // nowo dodany LI, nowe zadanie 
let $allTasks; // lista wszystkich dodanych LI, zadań 
let $idNumber = 0; // ID dodawane do kazdego nowego zadania 
let $popup; // pobrany popup 
let $popupInfo; // alert w popupie, jak sie doda pusty tekst 
let $editedToDo; // edytowany ToDO 
let $popupInput; // tekst wpisywany do inputa w popup 
let $addPopupBtn; // przycisk zatwierdz w popup 
let $closeToDoBtn; //przycisk od zamykania popup'a 

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todo-input');
    $alertInfo =document.querySelector('.alert-info');
    $addBtn = document.querySelector('.add-btn');
    $ulList = document.querySelector('.todo-list ul');
    $allTasks = document.getElementsByTagName('li');
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popup-info');
    $popupInput = document.querySelector('.popup-input');
    $addPopupBtn = document.querySelector('.accept');
    $closeToDoBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $todoInput.addEventListener('keyup', enterCheck);
    $ulList.addEventListener('click', checkClick);
    $addPopupBtn.addEventListener('click', changeToDo);
    $closeToDoBtn.addEventListener('click', closePopup);
}

const addNewTask = () => {
    if ($todoInput.value !== '') {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`);
        $ulList.appendChild($newTask);

        $todoInput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania!';
    }
}

const enterCheck = () => {
    // dodawanie toDO za pomoca klawisza enter
    if (event.keyCode ===13) {
        addNewTask();
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = 'EDIT';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);
}

const checkClick = e => {
    // e.target to li z id test jesli na li wskazujemy itp, nie wykrywa ze ze nacisnelismy na button jesli wcisniemy na icone, i trzeba uzyc funkcji closest, szukamy najblizszy button
    if (e.target.classList.value !== '') {
        if (e.target.closest('button').classList.contains('complete')) {  
            e.target.closest('li').classList.toggle('completed');
            e.target.closest('button').classList.toggle('completed');
            // console.log('complete');
        } else if (e.target.closest('button').classList.contains('edit')) {
            editTask(e);
            // console.log('edit');
        } else if (e.target.closest('button').classList.contains('delete')) {
            deleteTask(e);
            // console.log('delete');
        }
    }
}

const editTask = e => {
    const oldToDO = e.target.closest('li').id;
    $editedToDo = document.getElementById(oldToDO); //przechowuje caly element LI
    $popupInput.value = $editedToDo.firstChild.textContent;
    // console.log($editedToDo.firstChild); //pokazuje zawartosc 
    $popup.style.display = 'flex';
}

const changeToDo = () => {
    if ($popupInput.value !== '') {
        $editedToDo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.innerText = '';

    } else {
        $popupInfo.innerText = 'Musisz podać jakąś treść!';
    }
}

const deleteTask = e => {
    const deleteToDO = e.target.closest('li');
    deleteToDO.remove();

    if ($allTasks.length === 0) {
        $alertInfo.innerText = 'Brak zadań na liście.';
        // console.log('brak zadan na liscie');
    }
}

const closePopup = () => {
    $popup.style.display = 'none';
    $popupInfo.innerText = '';
}

document.addEventListener('DOMContentLoaded', main);