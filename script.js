var body = document.querySelector('body')

//Хедер
function createHeader(){
    var header = document.createElement('div')
    header.className = 'header'
    body.append(header)
}
createHeader()

//Подпись
function title(){
    var header = document.querySelector('.header')
    var div = document.createElement('div')
    div.className = 'title-container'
    header.append(div)
    var title = document.createElement('h1')
    title.className = 'title'
    title.textContent = 'Кошки VS Мышки'
    div.append(title)
}
title()

//Кнопка play
function createButtonPlay(){
    var button = document.createElement('button')
    button.className = 'play'
    button.innerHTML = 'Play'
    var header = document.querySelector('.header')
    header.append(button)
}
createButtonPlay()

//__________________________________________________________

//Создание таймера
function createTimer(){
    var header = document.querySelector('.header')
    var timerZone = document.createElement('div')
    timerZone.className = 'time-zone'
    header.append(timerZone)
    var timer = document.createElement('p')
    timer.className = 'time'
    timer.textContent = '00:00'
    timer.setAttribute('id', 'timer')
    timerZone.append(timer)
}
createTimer()

//Отсчет времени
function time() {
    min = 0
    sec = 0
    setInterval(addTime, 1000)
}

function addTime(){
    var timer = document.getElementById('timer');
    sec++
    if (sec >= 60){
        sec = sec - 60
        min ++
    }
    if (sec < 10){
        if (min < 10){ 
            timer.innerHTML = '0'+min+':'+'0'+sec
        }else{
            timer.innerHTML = min+':'+'0'+sec
        }
    }
    if (min < 10){
        if (sec < 10){
            timer.innerHTML = '0'+min+':'+'0'+sec
        }else{
            timer.innerHTML = '0'+min+':'+sec
        }
    }else{
        timer.innerHTML = min + sec
    }
}

//______________________________________________________
//Игровая зона
function createPlayZone(){
    var playZone = document.createElement('div')
    playZone.className = 'play-zone'
    body.append(playZone)
}
createPlayZone()

//______________________________________________________

//Ловушка
function createPoint(){
    //создание
    var playZone = document.querySelector('.play-zone')
    var point = document.createElement('img')
    point.setAttribute('src', 'img/3.png')
    point.className = 'point'
    playZone.append(point)
    //назвначение размеров
    point.style.width = Math.random() * (150-50) + 50
    point.style.height = Math.random() * (150-50) + 50

    //присвоение координат
    //размеры игровой зоны
    var playZone = document.querySelector('.play-zone')
    var playZoneX = playZone.offsetWidth
    var playZoneY = playZone.offsetHeight
    //X
    point.style.left = Math.random() * (playZoneX) + 'px'
    //Y
    point.style.top = Math.random() * (playZoneY) + 'px'
}

//Ловушка для мыши
var playZone = document.querySelector('.play-zone')
playZone.addEventListener('mouseover', function(e){
    var target = e.target.closest('.point')
    if (target){
        playZone.removeEventListener('mousemove', mousePosition)
    }
})

//_______________________________________________
//мышь 
function createMouse (){
var playZone = document.querySelector('.play-zone')
var mouse = document.createElement('img')
mouse.setAttribute('src', 'img/2.png')
mouse.className = 'mouse'
playZone.append(mouse)
}

//Сохранение позиции миши
var arrMousePositionX = []
var arrMousePositionY = []

//позиция миши
function mousePosition(e){
    var mouse = document.querySelector('.mouse')
    var mouseX = e.clientX
    var mouseY = e.clientY
    mouse.style.left = mouseX - 25 + 'px'
    mouse.style.top = mouseY - 25 + 'px'
    var aroundX = Math.round(mouseX)-25
    var aroundY = Math.round(mouseY)-25
   arrMousePositionX.push(aroundX)
   arrMousePositionY.push(aroundY)
 
}

//_______________________________________________

//Создание кота
function createCat(){
var playZone = document.querySelector('.play-zone')
var cat = document.createElement('img')
cat.setAttribute('src', 'img/1.png')
cat.className = 'cat'
playZone.append(cat)
}

//Присвоение координат коту
function catPosition(){
    var cat = document.querySelector('.cat')
    for(var i = 0; i<arrMousePositionX.length; i++){
    setInterval( cat.style.left = arrMousePositionX[i] + 'px', 20)
    setInterval( cat.style.top = arrMousePositionY[i] + 'px', 20)
    }
}

//Перемещение кота
function intervalCatPosition(){
   setInterval(catPosition, 10)
}

//Условия после проигрыша
function lose(){
    var cat = document.querySelector('.cat')
    var mouse = document.querySelector('.mouse')
    if (cat.style.top == mouse.style.top){
        clearInterval(1)
        clearInterval(2)
        clearInterval(6)
        clearInterval(7)
        playZone.removeEventListener('mousemove', mousePosition)
        var title = document.querySelector('.title')
        title.innerHTML = 'Ваш результат ' + setTimer()
        cat.style.position = 'absolute'
        mouse.style.position = 'absolute'
    }
}
//Передача времени по проигрышу
function intervalLose(){
   setInterval(lose, 1000) 
}

function setTimer(){
    var timer = document.querySelector('.time')
    var timerText = timer.textContent
    return timerText
}

//Начало игры по нажатию на кнопку
var buttonPlay = document.querySelector('.play')
buttonPlay.addEventListener('click', function(e){
    var target = e.target
    if (target){
        //запуск времени
        time()
        //запуск ловушки
       setInterval(createPoint,5000) 
        //Запуск мыши
        createMouse()
        var playZone = document.querySelector('.play-zone')
        playZone.addEventListener('mousemove', mousePosition)
        //Запуск кота
        setTimeout(createCat, 2000)
        setTimeout(intervalCatPosition,2000)
        //Запуск условия проигрыша
        setTimeout(intervalLose, 2000)
    }
})
