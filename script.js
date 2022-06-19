const slides = ['https://picsum.photos/500/500', 'https://picsum.photos/600/600', 'https://picsum.photos/700/700']

function createElement(elem, clas, elem2, src){
    elem.className = clas
    elem2.append(elem)
    elem.src = src
}

function slider(){
//Контейнер
const container = document.createElement('div')
createElement(container, 'container', document.body)    
//Содержимое
const div_slider = document.createElement('div')
createElement(div_slider, 'slider', container)
//_____________________________
//Кнопка влево
const button_left = document.createElement('button')
createElement(button_left, 'btn left', div_slider)

const button_left_img = document.createElement('img')
createElement(button_left_img, 'btn-img left', button_left, 'slide-left.png')
//_____________________________
//контейнер под слайды
const slider_wrap = document.createElement('div')
createElement(slider_wrap, 'slider-wrap', div_slider)

const ul_slide = document.createElement('ul')
slider_wrap.append(ul_slide)

//Создание слайдов
for(let i = 0; i<slides.length; i++){
    const li_slide = document.createElement('li')
    ul_slide.append(li_slide)

    const img_slide = document.createElement('img')
    createElement(img_slide, 'slide-img', li_slide, slides[i])
}

//__________________________

//Кнопка вправо
const button_right = document.createElement('button')
createElement(button_right, 'btn right', div_slider)

const button_right_img = document.createElement('img')
createElement(button_right_img, 'btn-img right', button_right, 'slide-right.png')
//_________________________
//Поинт
const point_container = document.createElement('div')
createElement(point_container, 'point-wrap', container)

for (let j=0; j<slides.length; j++){
const point = document.createElement('div')
createElement(point, 'point', point_container)
}
//__________________________
}
slider()


const mover = document.querySelector('.slider-wrap ul');
const pointer = document.querySelector('.point-wrap')

const li = mover.querySelectorAll('li')
const points = document.querySelectorAll('.point')

let count = 0;
points[count].classList.add('active')
li[count].classList.add('active')


const addAndRemove_active = (elem1, elem2, elem3, elem4)=>{
elem1.classList.remove('active')
elem2.classList.add('active')
elem3.classList.remove('active')
elem4.classList.add('active')
}



const OnMove = (e)=>{
let target = e.target
if (target.classList.contains('right')){
    let activeImg = mover.querySelector('.active')
    let nextImg = activeImg.nextElementSibling

    let activePoint = pointer.querySelector('.active')
    let nextPoint = activePoint.nextElementSibling

    let width = 0
    if(nextImg){
        width = getComputedStyle(nextImg).width
        count++;
        addAndRemove_active(activeImg, nextImg, activePoint, nextPoint)  
    } else {
        count = 0;
        addAndRemove_active(activeImg, li[count], activePoint, points[count])
    }
    mover.style.transform = `translateX(${-parseInt(width) * count}px)`
}
if (target.classList.contains('left')){
    let activeImg = mover.querySelector('.active')
    let previousImg = activeImg.previousElementSibling

    let activePoint = pointer.querySelector('.active')
    let previousPoint = activePoint.previousElementSibling
    
    let width = 0
    if (previousImg){
        width = getComputedStyle(previousImg).width
        count--;
        addAndRemove_active(activeImg, previousImg, activePoint, previousPoint)
        mover.style.transform = `translateX(${-parseInt(width) * (count)}px)`
    }
    else{
        count = 2;
        width = (getComputedStyle(activeImg).width.replace('px', '')*count)+'px'
        addAndRemove_active(activeImg, li[count], activePoint, points[count])
        mover.style.transform = `translateX(${-parseInt(width)}px)`
    }
}
}

const btn = document.querySelectorAll('.btn')
btn.forEach(elem => elem.addEventListener('click', OnMove))
