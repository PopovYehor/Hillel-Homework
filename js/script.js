const create = (elem, clas, text, elem2)=>{
    elem.className = clas
    elem.textContent = text
    elem2.append(elem)
}
const addAttribute = (elem, attr1, attr2, attr3, attr4) =>{
    elem.setAttribute(attr1, attr2)
    elem.setAttribute(attr3, attr4)
}

//-----------------------рендер страницы-------------------//
const renderPage = ()=>{
    //контейнер
    const container = document.createElement('div')
    create(container, 'container', '', document.body)
    const titelContainer = document.createElement('div')
    create(titelContainer, 'title-container', null, container)
    const titlePage = document.createElement('h1')
    create(titlePage, 'title', 'Мои заметки', titelContainer)
    const pencilImg = document.createElement('img')
    create(pencilImg, 'pencil', '', titelContainer)
    addAttribute(pencilImg, 'src', './img/pencil.png')
    //Логин
    const divLogin = document.createElement('div')
    create(divLogin, 'login', '', container)
    const inputLogin = document.createElement('input')
    addAttribute(inputLogin, 'type', 'text', 'placeholder', "Введите имя пользователя")
    create(inputLogin, 'login-area input-item', null, divLogin)
    const btnLogin = document.createElement('button')
    create(btnLogin, 'btn-login btn', 'Вход', divLogin)
    //Добавление таска
    const divAddTask = document.createElement('div')
    create(divAddTask, 'add-do', '', container)
    const inputTask = document.createElement('input')
    addAttribute(inputTask, 'type', 'text', 'placeholder', "Добавить заметку")
    create(inputTask, 'add-do-area input-item', '', divAddTask)
    const btnAdd = document.createElement('button')
    create(btnAdd, 'btn-add btn', '+', divAddTask)
    //Контейнер таска
    const divTaskContainer = document.createElement('div')
    create(divTaskContainer, 'to-do-list-container', '', container)
    const divTaskList = document.createElement('div')
    create(divTaskList, 'do-list', '', divTaskContainer)
}
renderPage()

//--------------------Масив пользователей---------------------//
let users = [
    {id: 0 ,name: 'Егор', task: ['Встать','Пойти','Прийти','Лечь',], check: [false, false, true, true]},
    {id: 1, name: 'Федя', task: ['Почистить зубы','Попить воды'], check: [true, true]},
    {id: 2, name: 'Вася', task: ['Быть Васей', 'Сходить на работу', 'Получить зарплату', 'Выпить пиво'], check: [true, false, false, true]},
]

//---------------------Проверка юзера------------------------//
const inputLogin = document.querySelector('.login-area')
const btnLogin = document.querySelector('.btn-login')
let taskCounter = ''
btnLogin.addEventListener('click', function(){
    for (let i = 0; i< users.length; i++){
        if (users[i].name == inputLogin.value){
            sessionStorage.setItem('userName', users[i].name)
            sessionStorage.setItem('userID', users[i].id)
            let userID = sessionStorage.getItem('userID')
            sessionStorage.setItem('userTask', JSON.stringify(users[userID].task))
            sessionStorage.setItem('userCheck', JSON.stringify(users[userID].check))
            renderTitle(sessionStorage.getItem('userName'))
            renderTask()
            break
    }
}
    let getID = sessionStorage.getItem('userID')
    //Добавление таска

    taskCounter = JSON.parse(sessionStorage.getItem('userTask')).length
    const btn_add = document.querySelector('.btn-add')
    btn_add.addEventListener('click', function(){ addTask(getID)})
    
    //Выполнение таска
    let check_item = document.querySelectorAll('.check')
    check_item.forEach((elem, i) => elem.addEventListener('click', function(){
    let list_item = document.querySelectorAll('.list-item')
    addDone(elem, i, getID, list_item)}))
})


//-------------------Стартовый рендер юзера------------------------------//
const doList = document.querySelector('.do-list')
const doListContainer = document.querySelector('.to-do-list-container')
const renderTitle = (text)=>{
    let oldTitle = document.querySelector('.list-title')
    if (oldTitle) oldTitle.remove();
    
    let title = document.createElement('h2')
    create(title, 'list-title', `Список дел пользователя ${text}`, doListContainer)

    let list = document.createElement('ol')
    create(list, 'list', null, doList)
}
//--------------рендер тасков-----------------//
const renderTask = ()=>{
    let list = document.querySelector('.list')
    let listItems = document.querySelectorAll('.list-item')
    listItems.forEach(elem => elem.remove())
    let userTask = JSON.parse(sessionStorage.getItem('userTask'))
    for (let j = 0; j<userTask.length; j++){
        //текст
        let task = userTask[j]
        let listItem = document.createElement('li')
        create(listItem, 'list-item', task, list)
        //чекбокс
        let checkBox = document.createElement('input')
        addAttribute(checkBox, 'type', "checkbox")
        create(checkBox, 'check', '', listItem)
        let userCheck = JSON.parse(sessionStorage.getItem('userCheck'))
        if (userCheck[j] == true){
            checkBox.setAttribute('checked', 'checked')
            listItem.classList.add('done')
        }
    }
}
//----------------------Добавление новых тасков---------------------//
let arrNewItems = []
let arrNewCheck = []

const addTask = (id)=>{
let defaultCount = JSON.parse(sessionStorage.getItem('userTask')).length
taskCounter = taskCounter + 1
const toDo_list = document.querySelector('.list')
const inputAdd = document.querySelector('.add-do-area')
//добавление текста
let item = document.createElement('li')
create(item, `list-item`, inputAdd.value, toDo_list)
users[id].task.push(item.textContent)
arrNewItems.push(item)

//добавление чекбоса
let checkBox = document.createElement('input')
addAttribute(checkBox, 'type', 'checkbox')
create(checkBox, `check`, '', item)
users[id].check.push(false)
arrNewCheck.push(checkBox)

let newTaskCounter = taskCounter - defaultCount - 1
addNewCheckTask(taskCounter, newTaskCounter, id)

}

//-----------------------Изменение добавленых тасков---------------//
const addNewCheckTask = (i, j, id)=>{
    arrNewCheck[j].addEventListener('click', function(){
        if (!arrNewCheck[j].hasAttribute('checked')){
            arrNewCheck[j].setAttribute('checked', 'checked')
            arrNewItems[j].classList.add('done');
            users[id].check[i-1] = true
        }
        else if (arrNewCheck[j].hasAttribute('checked')){
            arrNewCheck[j].removeAttribute('checked', 'checked')
            arrNewItems[j].classList.remove('done')
            users[id].check[i-1] = false
        }
    })
}

//---------Отметка выполнения заранее вписаных тасков------------------//

const addDone = (elem, i, id, item)=>{

    if (!elem.hasAttribute('checked')){
        elem.setAttribute('checked', 'checked')
        item[i].classList.add('done');
        users[id].check[i] = true
    }
    else if (elem.hasAttribute('checked')){
        elem.removeAttribute('checked', 'checked')
        item[i].classList.remove('done')
        users[id].check[i] = false
    }
}

