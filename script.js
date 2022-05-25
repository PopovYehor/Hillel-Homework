//Создание игрового поля
var body = document.querySelector('body')
var conteiner = document.createElement('div')
conteiner.className = 'container'
body.append(conteiner)
var title = document.createElement('h1')
title.className = 'title'
title.textContent = 'Крестики VS Нолики'
conteiner.append(title)
var fieldZone = document.createElement('div')
fieldZone.className = 'field-zone'
conteiner.append(fieldZone)
function createGameZone(text){
    var button = document.createElement('button');
    button.className = 'field'
    button.setAttribute('data-id', text)
fieldZone.append(button)
}
var col = 0
for (var i = 0; i<9; i++) {
        createGameZone([i])
        col++;
}

//Функция игры
var fields = document.querySelectorAll('.field')
var step = true

function setXandO(e){
    var elem = e.target
    var check = elem.matches('.field')
    if (check){
        for (var i = 0; i<fields.length; i++){
    if (step){
        elem.innerHTML = 'x'
        elem.classList.add('x')
        elem.classList.add('active')
        step = false
        console.log('click')
        break
    }
    if(!step){
        elem.innerHTML = 'o'
        elem.classList.add('o')
        elem.classList.add('active')
        step = true
        console.log('click')
        break
    }
}
}
}

//Добавление вывода победителя
function winner() {
	var items = document.querySelectorAll(".field");
	if ( items[0].textContent == "x" && items[1].textContent == 'x' && items[2].textContent == 'x' ||
		 items[3].textContent == "x" && items[4].textContent == 'x' && items[5].textContent == 'x' ||
		 items[6].textContent == "x" && items[7].textContent == 'x' && items[8].textContent == 'x' ||
		 items[0].textContent == "x" && items[3].textContent == 'x' && items[6].textContent == 'x' ||
		 items[1].textContent == "x" && items[4].textContent == 'x' && items[7].textContent == 'x' ||
		 items[2].textContent == "x" && items[5].textContent == 'x' && items[8].textContent == 'x' ||
		 items[0].textContent == "x" && items[4].textContent == 'x' && items[8].textContent == 'x' ||
		 items[6].textContent == "x" && items[4].textContent == 'x' && items[2].textContent == 'x' )
		return alert ('Победа Игрок-1')
	if ( items[0].textContent == "o" && items[1].textContent == 'o' && items[2].textContent == 'o' ||
		 items[3].textContent == "o" && items[4].textContent == 'o' && items[5].textContent == 'o' ||
		 items[6].textContent == "o" && items[7].textContent == 'o' && items[8].textContent == 'o' ||
		 items[0].textContent == "o" && items[3].textContent == 'o' && items[6].textContent == 'o' ||
		 items[1].textContent == "o" && items[4].textContent == 'o' && items[7].textContent == 'o' ||
		 items[2].textContent == "o" && items[5].textContent == 'o' && items[8].textContent == 'o' ||
		 items[0].textContent == "o" && items[4].textContent == 'o' && items[8].textContent == 'o' ||
		 items[6].textContent == "o" && items[4].textContent == 'o' && items[2].textContent == 'o' )
		return alert ('Победа Игрок-2')
}
fieldZone.addEventListener('click', winner)

//Добавление кнопки очистить
function createCleanButton(){
var cleanZone = document.createElement('div')
cleanZone.className = 'clean-zone'
conteiner.append(cleanZone)
var cleaner = document.createElement('button')
cleaner.className = 'clean'
cleaner.textContent = 'Очистить'
cleanZone.append(cleaner)
}
createCleanButton()

//Функция кнопки очистить
var cleaner = document.querySelector('.clean')

cleaner.onclick = function(){
var field = document.querySelectorAll('.field')
for (var i = 0; i<field.length; i++){
    if (field[i].classList.contains('x')){
        field[i].classList.remove('x')
        field[i].classList.remove('active')
        field[i].innerHTML = ''
        
    }
    if (field[i].classList.contains('o')){
        field[i].classList.remove('o')
        field[i].classList.remove('active')
        field[i].innerHTML = ''
    }
}
}

//Разрешение и запрет нажатия
function remove(){
var buttons = document.querySelectorAll('.field')
    for (var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', setXandO)
        if (buttons[i].classList.contains('active')){
        buttons[i].removeEventListener('click', setXandO)
        }
    }
}
fieldZone.addEventListener('click', remove)
