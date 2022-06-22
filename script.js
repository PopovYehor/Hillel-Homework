const create =(elem1, clas,text, elem2, src)=>{
elem1.className = clas
elem1.textContent = text
elem2.append(elem1)
elem1.src = src
}

const render = ()=>{
    const container = document.createElement('div')
    create(container, 'container', '', document.body)

    const wraper = document.createElement('div')
    create(wraper, 'wraper', '', container)

    const blockItem = 13
    for (let i = 0; i< blockItem; i++){
        const block = document.createElement('div');
        create(block, 'block', [i], wraper);
    }

    const blocks = document.querySelectorAll('.block')
    const figure = document.createElement('img')
    create(figure, 'figure', '', blocks[0], 'source/fishka.png')

    const itemBox = document.createElement('div')
    create(itemBox, 'item-box', '', container)

    const buttonGo = document.createElement('button')
    create(buttonGo, 'btn', 'GO', itemBox)

    const cube = document.createElement('img')
    create(cube, 'cube', '', itemBox, 'source/undefied.png')
}
render()

const cubeImg = ['source/1.png', 'source/2.png', 'source/3.png', 'source/4.png', 'source/5.png', 'source/6.png']

const random = (min, max)=> Math.ceil(Math.random()*(max-min)+min)

const cubes = document.querySelector('.cube')
const figureImg = document.querySelector('.figure')
let figureCount = 30

const changeCube = ()=>{
let count = random(0, 6)

for (let i = 0; i<count; i++){
cubes.src = cubeImg[i]
}
figureCount += count*100
figureImg.style.cssText = `
position: absolute;
top: 10px;
left: ${figureCount}px;`

figureCount>=1230 ? figureImg.style.left = `1230px`: figureImg.style.left = `${figureCount}px`
}

const GoButton = document.querySelector('.btn').addEventListener('click', changeCube)



