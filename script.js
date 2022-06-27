const item = [
    ['body-color', 'eyes', 'head', 'moth', 'spots', 'scale'],
    ['source/icons/1.png', 'source/icons/2.png', 'source/icons/3.png', 'source/icons/4.png', 'source/icons/5.png', 'source/icons/6.png',],
    ['source/body_color/1.png', 'source/body_color/2.png', 'source/body_color/3.png', 'source/body_color/4.png', 'source/body_color/5.png', 'source/body_color/6.png'],
    ['source/eyes/1.png', 'source/eyes/2.png', 'source/eyes/3.png', 'source/eyes/4.png'],
    ['source/head/1.png', 'source/head/2.png', 'source/head/3.png'],
    ['source/mouth/1.png', 'source/mouth/2.png', 'source/mouth/3.png'],
    ['source/spots/1.png', 'source/spots/2.png', 'source/spots/3.png', 'source/spots/4.png'],
    ['source/scale/1.png', 'source/scale/2.png', 'source/scale/3.png'],
    ['item-body-color', 'item-eyes', 'item-head', 'item-moth', 'item-spots', 'item-scale']
]

//Создание боковой панели 
const leftPanel = ()=>{
const wrapper = document.createElement('div')
$(wrapper).addClass('wrapper').appendTo($('body'))

const containerLeft = document.createElement('div');
$(containerLeft).addClass('container-left').appendTo($(wrapper))

const itemsList = document.createElement('ul')
$(itemsList).addClass('list').appendTo(containerLeft)


for (let i = 0; i<item[0].length; i++){
    const itemsIcon = document.createElement('li')
    $(itemsIcon).addClass('icon-item').appendTo(itemsList)

    const iconImg = document.createElement('img')
    $(iconImg).addClass(function(){return "icon item-" + item[0][i]}).attr('src', item[1][i]).appendTo(itemsIcon)
}
}
leftPanel()



//Создание выдвижной панели
const rightPanel = ()=>{

    const container = document.createElement('div');
    $(container).addClass('container-right').appendTo($('.wrapper'))
    
    const itemsList = document.createElement('ul')
    $(itemsList).addClass('list-right').appendTo(container)
    
}
rightPanel()

const addItem = (items , clas)=>{
    const itemsList = $('.list-right')

    for (let i = 0; i<items.length; i++){
        const itemsIcon = document.createElement('li')
        $(itemsIcon).addClass('icon-item-right').appendTo(itemsList)
    
        const iconImg = document.createElement('img')
        $(iconImg).addClass(function(){return"icon "+ clas+' '+i}).attr('src', items[i]).appendTo(itemsIcon)
    }
}


/*выбор на левой панели */

$('.icon-item').on('click', function(e){
    
    let target = e.target
    let items = ''
    let clas = ''
    for (let i = 0; i<item[8].length; i++){
        if ($(target).hasClass(item[8][i])){
             items = item[i+2]
            clas = item[0][i]
            break
    }}

    let itemsIcon = $('.icon-item-right')
    itemsIcon.remove()

    let rightContainer = $('.container-right')
    addItem(items, clas)

    rightContainer.css({transform: 'translate(190px)', transition: '2s'})

})

//Создание зоны для динозавра

const dinoZone = ()=>{
    const dinoContainer = document.createElement('div')
    $(dinoContainer).addClass('dino-container').appendTo($('.wrapper'))

    const dinoTitle = document.createElement('span')
    $(dinoTitle).addClass('dino-title').text('My little Dino').appendTo(dinoContainer)
}
dinoZone()

//Отрисовка тела динозавра
const renderDino = (clas, items)=>{
    const sectionDino = document.createElement('img')
    $(sectionDino).addClass(clas).attr('src', items).appendTo($('.dino-container'))
}
//Удаление преведущего выбора
const removeItem = (clas)=>{
    $('.dino-title').remove()
    $(clas).remove() 
}
//Выдача выбраного элемента
let items = ['', '', '', '', '', '']
const changeItem = function (target, n, j){
    for (let i=0; i<item[n].length; i++)
    if ($(target).hasClass(i)){
        items[j] = item[n][i]
        break
}
}

//Выбор части тела динозавра
$('.container-right').on('click', function(e){
    let target = e.target

//Цвет кожи_________________________________________    
if ($(target).hasClass('body-color')){
    changeItem(target, 2, 0)
    removeItem('.body-dino')
    renderDino('body-dino' ,items[0])
    $('.body-dino').css({width: '800px', height: '400px','z-index': '1'})
}
//Глаза_________________________________________
if ($(target).hasClass('eyes')){
    changeItem(target, 3, 1)
    removeItem('.eyes-dino')
    renderDino('eyes-dino',items[1])
    $('.eyes-dino').css({width: '30px', height: '15px', left: '125px', top: '215px'})
}
//Шляпа___________________________________________
if ($(target).hasClass('head')){
    changeItem(target, 4, 2)
    removeItem('.head-dino')
    renderDino('head-dino' , items[2])
    if (items[2] == item[4][1]){
        $('.head-dino').css({width: '100px', height: '75px', left: '84px', top: '143px'})
    }else{
        $('.head-dino').css({width: '100px', height: '100px', left: '100px', top: '110px'})
    }
}
//Рот___________________________________________
if ($(target).hasClass('moth')){
    changeItem(target, 5, 3)
    removeItem('.moth-dino')
    renderDino('moth-dino',items[3])
    $('.moth-dino').css({width: '30px', height: '15px', left: '105px', top: '230px'})
}
//Пятна_________________________________________
if ($(target).hasClass('spots')){
    changeItem(target, 6, 4)
    removeItem('.spots-dino')
    renderDino('spots-dino' ,items[4])
    if (items[4] == item[6][0]){
        $('.spots-dino').css({width: '715px', height: '325px', left: '175px', top: '220px'})
    }
    if (items[4] == item[6][1]){
        $('.spots-dino').css({width: '680px', height: '335px', left: '190px', top: '260px'})
    }
    if (items[4] == item[6][2]){
        $('.spots-dino').css({width: '708px', height: '350px', left: '190px', top: '247px'})
    }
    if (items[4] == item[6][3]){
        $('.spots-dino').css({width: '560px', height: '255px', left: '258px', top: '328px'})
    }
}
//Гребень________________________________
if ($(target).hasClass('scale')){
    changeItem(target, 7, 5)
    removeItem('.scale-dino')
    renderDino('scale-dino',items[5])
    if (items[5] == item[7][0]){
        $('.scale-dino').css({width: '729px', height: '347px', left: '172px', top: '199px'})
    }
    if (items[5] == item[7][1]){
        $('.scale-dino').css({width: '706px', height: '335px', left: '192px', top: '210px'})
    }
    if (items[5] == item[7][2]){
        $('.scale-dino').css({width: '706px', height: '335px', left: '190px', top: '210px'})
    }
}
})