const arrGame = [
    {question: 'Имя популярного короля', answer:'артур'},
    {question: 'Кто потерялся в океане?', answer: 'немо'},
    {question: 'В какой стране находится Прага?', answer: 'чехия'},
    {question: 'Какая самая маленькая птица в мире?', answer: 'колибри'},
]
//Текст Якубовича
const yakubovichText = (text)=>{
    $('.yakubovichSay').text(text)
}
//рандомный вопрос
const randomQuestion = ()=>{
    return Math.round(Math.random()*((arrGame.length-1)))
}
let questions = ''
questions = randomQuestion()
//Вставка вопроса
$('.wrapQuest').text(arrGame[questions].question)
//Рендер количества букв
const addLetter = ()=>{
    $('.itemLetter').remove()
for (let i = 0; i<arrGame[questions].answer.length; i++){
    const letter = document.createElement('li')
    $(letter).addClass('itemLetter').appendTo($('.wrapLetters'))
}
}
addLetter()


//Таймер
let time = 10
const timer = ()=>{
    time = time -1
    $('.timer').text(time)
    if (time == 0){
        $('.roll').unbind('click') 
        game(false ,'Время вышло, вы проиграли')
    }
}


//Проверка правильности и вывод буквы
let counterLetter = 0
$('.myLetter').attr('disabled', 'disabled')


const choiseLetter = ()=>{
let trueLeter = $('.myLetter').val().toLowerCase()

let answerItem = arrGame[questions].answer
let indx = []

answerItem.split("").map(function(item, i){if(item==trueLeter){ indx.push(i); }})

if (indx.length == 0){
    game(false, 'Такой буквы нет, вы проиграли!')
    $('.roll').unbind('click')
}
else{
for (let i = 0; i<indx.length; i++){
    $('.itemLetter').eq(indx[i]).text(trueLeter.toUpperCase())
    game(false, 'Молодец! Крути барабан')
    counterLetter++
}}
//Проверка на победу
if (counterLetter == answerItem.length){
    game(false, 'Молодец! Вы победили')
    $('.roll').unbind('click')
}
}

//Функция действий
let intervalCounter = 1

const game = (flag, text)=>{
    if (flag == true){
        time = 10
        setInterval(timer, 1000)
        yakubovichText('Назовите следующую букву')
        $('.myLetter').removeAttr('disabled')
        $('.send').on('click', choiseLetter)
    }
    if (flag == false){
        yakubovichText(text) 
        $('.myLetter').attr('disabled', 'disabled')
        intervalCounter = intervalCounter+2
        clearInterval(intervalCounter)
        $('.send').unbind('click')
    }
}

//Барабан
const opt = {
    rot: 0, // ячейка
    section: 16, // к-во ячеек
    item: 360 / 16,
    proc: 0,
    score: 0
}
$('.roll').on('click', function (e){
    e.preventDefault()
    let dok = 16-opt.rot;
    opt.rot = Math.floor(Math.random() * opt.section + 1 )
    let col = Math.floor((Math.random() * 2) + 4)
    opt.proc += (opt.rot + col*16 + dok) * 22.5
    $('.baraban').animate({  textIndent: opt.proc }, {
        duration: 5000,
        complete: function() {
            switch(opt.rot){
                case 16: opt.score += 300, game(true); break;
                case 1: opt.score += 200, game(true); break;
                case 2: opt.score = opt.score * 3, game(true); break;
                case 3: opt.score += 700, game(true); break;
                case 4: game(false, 'Увы, но вы проиграли!'), $('.wrapQuest').text('Вы проиграли'), $('.roll').unbind('click'); break;
                case 5: opt.score += 1000, game(true); break;
                case 6: opt.score += 100, game(true); break;
                case 7: opt.score = opt.score * 2, game(true); break;
                case 8: opt.score += 600, game(true); break; 
                case 9: opt.score += 800, game(true); break;
                case 10: opt.score += 1, game(true); break; 
                case 11: opt.score += 400, game(true); break;
                case 12: opt.score += 900, game(true); break;
                case 13: opt.score += 0, game(true); break;
                case 14: game(true), yakubovichText('Приз автомобиль! Называйте букву!'); break;
                case 15: opt.score += 500, game(true); break;
            }
            $('.score').text(opt.score)

        },
        easing : 'swing',
        step: function(now) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
        }
    })
})