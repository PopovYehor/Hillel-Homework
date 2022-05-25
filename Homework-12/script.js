var ships = ['1-a', '3-a', '4-a','6-b', '2-c', '6-c','2-d', '2-e', '6-f', '7-f', '8-f', '1-h', '2-h','3-h','4-h']
var field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

//Построение поля
col = 0
var body = document.querySelector('body')
function createBtn(text){
    var button = document.createElement('button');
    button.className = 'btn';
    button.innerHTML = text;
    button.setAttribute('data-id', text)
    var field = document.querySelector('.field');
    field.append(button)
}

for (var i = 0; i<field.length; i++) {
    for(var j = 0; j<field.length; j++) {
        createBtn(`${j + 1}-${field[i]}`)
        col++;
    }
}

//Фиксирование действия
function shot (e){
    var elem = e.target
    var check = elem.matches('.btn')
    for (var i = 0; i<ships.length; i++){
    if (check) {
        if (elem.dataset.id == ships[i]){
        changeColor(elem,'red')
        inputText("Попал")
        elem.classList.add('active')
        console.log('click')
        break
        }
        if (ships[i] != elem.dataset.id){
            changeColor(elem, 'blue')
            inputText("Не попал")
            elem.classList.add('active')
            console.log('click')
        }
    }
}

}    


//Добавление и отключение клика
function remove(){
var buttons = document.querySelectorAll('.btn')
    for (var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', shot)
            if (buttons[i].classList.contains('active')){
            buttons[i].removeEventListener('click', shot)
            }
        }
}

//Вызов клика
var field = document.querySelector('.field')
field.addEventListener('click', remove)
//Функция текстового поля
function inputText (text){
    var input = document.querySelector('.text')
    input.value = text
}
//Функция смены цвета
function changeColor(elem ,color){
    elem.style.backgroundColor = color
}


