/*Игровая зона */
const create = function(elem, clas, elem2, text, src, value){
    elem.className = clas
    elem2.append(elem)
    elem.textContent = text
    elem.src = src
    elem.value = value
}
const items = {
    count: ['1','2','3'],
    name: ['камень', 'ножницы', 'бумага'],
    img: ['img/rock.png', 'img/scissor.png', 'img/paper.png'],
    score: 'Счет: ',
    draw: 'Ничья',
    win: 'Победитель: '
}

const players = {
    count: ['', ''],
    name: ['Игрок-1', 'Игрок-2'],
    score: [0, 0],
    img: ['', '']
}

const render = function (){
const titleGame = document.createElement('span')
create(titleGame, 'title-game', document.body, 'Камень-Ножницы-Бумага')

const container = document.createElement('div')
create(container, 'container', document.body)

const winTitle = document.createElement('span')
create(winTitle, 'winner', container, items.win + '?')

const wraper = document.createElement('div')
create(wraper, 'wraper', container)

for(let j = 0; j<players.name.length; j++){
    const player = document.createElement('div')
    create(player, 'player', wraper)

    const playerTitle = document.createElement('span')
    create(playerTitle, 'player-title', player, players.name[j])

    const playerScore = document.createElement('span')
    create(playerScore, 'player-score score', player, items.score+players.score[j])

    const playerImg = document.createElement('img')
    create(playerImg, 'player-img', player, '', 'img/undefied.png')
}

const firstplayer = document.querySelectorAll('.player')
const selectItem = document.createElement('select')
create(selectItem, 'select-item', firstplayer[0])
for (let i = 0; i<items.name.length; i++){
    const optionsItem = document.createElement('option')
    create(optionsItem, 'option-item', selectItem, items.name[i], '', [i])
}

const buttonPlay = document.createElement('button')
create(buttonPlay, 'btn', container, 'Play')

}
render()
/*Игра */



const scoreWin = function( scoreItem, score, titleWinner, winnerText){
    scoreItem.textContent = items.score+score
    titleWinner.textContent = items.win+winnerText
}

//Определение победителя
function winner (){
    let scoreItems = document.querySelectorAll('.score')
    let titleWin = document.querySelector('.winner')

   let player1Win = [players.count[0] == '1', players.count[0] == '2', players.count[0] == '3']
    
    let player2Win = [players.count[1] == '1', players.count[1] == '2', players.count[1] == '3'] 

    let item = 3

    for (let i = 0; i< item; i++){
        if (player1Win[i] && player2Win[i+1] || player2Win[i-2]){
            players.score[0]++
            scoreWin( scoreItems[0], players.score[0], titleWin, players.name[0])
            break
        } 
        else if (player2Win[i] && player1Win[i+1] || player1Win[i-2]){
            players.score[1]++
            scoreWin( scoreItems[1], players.score[1], titleWin, players.name[1])
            break
        } 
        else if (player1Win[i] && player2Win[i]){
            titleWin.textContent = items.draw
            break
        }
    }
}

const random = (min, max)=>Math.round(Math.random() * (max-min)+min)

const selects = document.querySelector('select')




//Присвоение картинки
const playerRand = ()=>{
    let ImgItems = document.querySelectorAll('img')
    let selects = document.querySelector('select').selectedIndex

    players.count[0] = selects+1
    players.img[0] = items.img[selects]
    ImgItems[0].src = players.img[0]

    players.count[1] = random(1,3)
        for (let n = 0; n < items.img.length; n++){
            if( players.count[1] == items.count[n]) players.img[1] = items.img[n]
        }
        ImgItems[1].src = players.img[1]

    winner()
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', playerRand)
