const slides = ['https://picsum.photos/500/500', 'https://picsum.photos/600/600', 'https://picsum.photos/700/700']


function slider(){
//Контейнер
const container = document.createElement('div')
container.className = 'container'
document.body.append(container)    
//Содержимое
const div_slider = document.createElement('div')
div_slider.className = 'slider'
container.append(div_slider)
//_____________________________
//Кнопка влево
const button_left = document.createElement('button')
button_left.className = 'btn left'
div_slider.append(button_left)

const button_left_img = document.createElement('img')
button_left_img.src = 'slide-left.png'
button_left_img.className = 'btn-img'
button_left.append(button_left_img)
//_____________________________
//контейнер под слайды
const slider_wrap = document.createElement('div')
slider_wrap.className = 'slider-wrap'
div_slider.append(slider_wrap)

const ul_slide = document.createElement('ul')
slider_wrap.append(ul_slide)

//Создание слайдов
for(let i = 0; i<slides.length; i++){
    const li_slide = document.createElement('li')
    ul_slide.append(li_slide)

    const img_slide = document.createElement('img')
    img_slide.className = 'slide-img'
    img_slide.src = slides[i]
    li_slide.append(img_slide)
}

//__________________________

//Кнопка вправо
const button_right = document.createElement('button')
button_right.className = 'btn right'
div_slider.append(button_right)

const button_right_img = document.createElement('img')
button_right_img.src = 'slide-right.png'
button_right_img.className = 'btn-img'
button_right.append(button_right_img)
//_________________________
//Поинт
const point_container = document.createElement('div')
point_container.className = 'point-wrap'
container.append(point_container)


for (let j=0; j<slides.length; j++){
const point = document.createElement('div')
point_container.append(point);
point.className = 'point'
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

const onRight = () => {
    let activeImg = mover.querySelector('.active')
    const nextImg = activeImg.nextElementSibling

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

const btn_right = document.querySelector('.right');
btn_right.addEventListener('click', onRight)


const onLeft = () => {
    let activeImg = mover.querySelector('.active')
    const previousImg = activeImg.previousElementSibling

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

const btn_left = document.querySelector('.left');
btn_left.addEventListener('click', onLeft)

