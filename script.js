//создание танка
function createTank(){
    var body = document.querySelector('body')
    var tank = document.createElement('img')
    tank.className = 'tank'
    var src = tank.setAttribute('src', '1.gif')
    var alt = tank.setAttribute('alt', 'tank')
    body.append(tank)
}
createTank()

//Создание взрыва
function createBang(){
    var body = document.querySelector('body')
    var tank = document.querySelector('.tank')
    var bang = document.createElement('img')
    bang.className = 'bang'
    var src = bang.setAttribute('src', '2.png')
    var alt = bang.setAttribute('alt', 'bang')
    body.append(bang)
}
createBang()

//Создание снаряда

function createBullet(){

    var body = document.querySelector('body')
    var tank = document.querySelector('.tank')
    var bullet = document.createElement('img')
    bullet.className = 'bullet'
    var src = bullet.setAttribute('src', '3.png')
    var alt = bullet.setAttribute('alt', 'bullet')
    body.append(bullet)
}
createBullet()

//Движние танка
function moveTank(e){
    //Танк
    var tank = document.querySelector('.tank')
    var wTank = tank.getBoundingClientRect().width
    var lTank = tank.getBoundingClientRect().left
    var tTank = tank.getBoundingClientRect().top
    //Скорость
    var spead = 5
//Вправо
    if (e.code === 'KeyD'){
        if (lTank>(window.innerWidth - wTank - spead)){
            tank.style.left = window.innerWidth - wTank + 'px'
            tank.style.transform = 'rotate(180deg)'
        }
        else {
            tank.style.left = lTank + spead + 'px'
            tank.style.transform = 'rotate(180deg)'
        }
    }
//Влево    
    if (e.code === 'KeyA'){
        if (lTank==0){
            tank.style.left = 0 + 'px'
            tank.style.transform = 'rotate(0deg)'
        }
        else{
            tank.style.left = lTank - spead + 'px'
            tank.style.transform = 'rotate(0deg)'
        }
    }
//Вниз
    if (e.code === 'KeyS'){
       if (tTank > (window.innerHeight - tTank)){
           tank.style.top = window.innerHeight - tTank  + spead + 90 + 'px'
           tank.style.transform = 'rotate(-90deg)'
       }
       else{
        tank.style.top = tTank + spead + 90 + 'px'
        tank.style.transform = 'rotate(-90deg)'
    }
    }
//Вверх
    if (e.code === 'KeyW'){
        if (tTank == 0){
            tank.style.top =  90 + 'px'
            tank.style.transform = 'rotate(90deg)'
        }
        else{ 
        tank.style.top = tTank - spead + 90 + 'px'
        tank.style.transform = 'rotate(90deg)'
        }
    }

}
document.addEventListener('keydown', moveTank)

function bang(e){
    //Выстрел
    var bang = document.querySelector('.bang')
    //Танк
    var tank = document.querySelector('.tank')
    var lTank = tank.getBoundingClientRect().left
    var tTank = tank.getBoundingClientRect().top
    switch(e.code){
    case "KeyD": 
        bang.style.left = lTank + 305 + 'px'
        bang.style.top = tTank + 30 + 'px'
        bang.style.transform = 'rotate(90deg)'
    break
    case 'KeyA':
        bang.style.left = lTank - 55 + 'px'
        bang.style.top = tTank + 30 + 'px'
        bang.style.transform = 'rotate(-90deg)'
    break
    case 'KeyS': 
        bang.style.left = lTank + 35 + 'px'
        bang.style.top = tTank + 300  + 'px'
        bang.style.transform = 'rotate(-180deg)'
    break
    case 'KeyW': 
        bang.style.left = lTank + 35 + 'px'
        bang.style.top = tTank - 60 + 'px'
        bang.style.transform = 'rotate(0deg)'
    break
    case "Space": 
        bang.style.display = 'block'
    break
    }
}
document.addEventListener('keydown', bang)

function bullet (e){
        //Снаряд
        var bullet= document.querySelector('.bullet')
        //Танк
        var tank = document.querySelector('.tank')
        var lTank = tank.getBoundingClientRect().left
        var tTank = tank.getBoundingClientRect().top
    switch(e.code){
    case "KeyD": 
        bullet.style.left = lTank + 550 + 'px'
        bullet.style.top = tTank + 50 + 'px'
        bullet.style.transform = 'rotate(0deg)'
    break
    case 'KeyA':
        bullet.style.left = lTank - 250 + 'px'
        bullet.style.top = tTank + 50 + 'px'
        bullet.style.transform = 'rotate(-180deg)'
    break
    case 'KeyS': 
        bullet.style.left = lTank + 45 + 'px'
        bullet.style.top = tTank + 500 + 'px'
        bullet.style.transform = 'rotate(90deg)'
        break
    case 'KeyW': 
        bullet.style.left = lTank + 45 + 'px'
        bullet.style.top = tTank - 200 + 'px'
        bullet.style.transform = 'rotate(-90deg)'
    break
    case "Space": 
        bullet.style.display = 'block'
        break
    }
}
document.addEventListener('keydown', bullet)

