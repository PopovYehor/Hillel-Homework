/*Игровая зона */
const create = function(elem, clas, elem2, text, src){
    elem.className = clas
    elem2.append(elem)
    elem.textContent = text
    elem.src = src
}
const items = {
    count: ['1','2','3'],
    name: ['rock', 'scissor', 'paper'],
    img: ['img/rock.png', 'img/scissor.png', 'img/paper.png']
}

const players = {
    count: ['', ''],
    name: ['Player-1', 'Player-2'],
    score: [0, 0],
    img: ['', '']
}

const render = function (){
const titleGame = document.createElement('span')
create(titleGame, 'title-game', document.body, 'Rock-Paper-Scissors')

const container = document.createElement('div')
create(container, 'container', document.body)

const winTitle = document.createElement('span')
create(winTitle, 'winner', container, 'Winner: ?')

const wraper = document.createElement('div')
create(wraper, 'wraper', container)

const firstPlayer = document.createElement('div')
create(firstPlayer, 'player', wraper)

const firstPlayerTitle = document.createElement('span')
create(firstPlayerTitle, 'first-player-title', firstPlayer, players.name[0])

const firstPlayerScore = document.createElement('span')
create(firstPlayerScore, 'first-player-score score', firstPlayer, 'Score: '+players.score[0])

const firstPlayerImg = document.createElement('img')
create(firstPlayerImg, 'first-player-img', firstPlayer, '', 'img/undefied.png')

const secondPlayer = document.createElement('div')
create(secondPlayer, 'player', wraper)

const secondPlayerTitle = document.createElement('span')
create(secondPlayerTitle, 'second-player-title', secondPlayer, players.name[1])

const secondPlayerScore = document.createElement('span')
create(secondPlayerScore, 'second-player-score score', secondPlayer, 'Score: '+players.score[1])

const secondPlayerImg = document.createElement('img')
create(secondPlayerImg, 'second-player-img', secondPlayer, '', 'img/undefied.png')

const buttonPlay = document.createElement('button')
create(buttonPlay, 'btn', container, 'Play')

}
render()
/*Игра */



const scoreWin = function( scoreItem, score, titleWinner, winnerText){
    scoreItem.textContent = 'Score: '+score
    titleWinner.textContent = 'Winner: '+winnerText
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
            titleWin.textContent = 'Draw'
            break
        }
    }
}

const random = (min, max)=>Math.round(Math.random() * (max-min)+min)
//Присвоение картинки
const playerRand = ()=>{

    for(let i =0; i<players.count.length; i++){
    players.count[i] = random(1,3)
        for (let n = 0; n < items.img.length; n++){
            if( players.count[i] == items.count[n]){
                players.img[i] = items.img[n]
            }
    let ImgItems = document.querySelectorAll('img')
    ImgItems[i].src = players.img[i]
    }}

    winner()
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', playerRand)