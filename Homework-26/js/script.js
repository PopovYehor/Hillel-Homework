let users = [
    {id: 0 ,name: 'Егор', task: ['Встать','Пойти','Прийти','Лечь',], check: [false, false, true, true]},
    {id: 1, name: 'Федя', task: ['Почистить зубы','Попить воды'], check: [false, true]},
]

let title = document.querySelector('.list-title')
//Проверка юзера
const inputLogin = document.querySelector('.login-area')

const btnLogin = document.querySelector('.btn-login')

btnLogin.addEventListener('click', function(){

    for (let i = 0; i< users.length; i++){
        //Если есть
    if (users[i].name == inputLogin.value){
        sessionStorage.setItem('userName', users[i].name)
        sessionStorage.setItem('userID', users[i].id)
        sessionStorage.setItem('userCheck',JSON.stringify(users[i].check))
        title.textContent = `Список дел для ${sessionStorage.getItem('userName')}`
        renderTask(i)
        break
    }
    //Если нет      
        //добавление кнопки подтвердждения
        if (inputLogin.value == ''){//Пустой юзер
            let newUser = {name: `Пользователь-${users.length}`, task: [], check: []}
            users.push(newUser)
            sessionStorage.setItem('userName', newUser.name)
            console.log(users)
        }
        else{//узер с именем
            let newUser = {name: inputLogin.value, task: [], check: []}
            users.push(newUser)
            sessionStorage.setItem('userName', newUser.name)
            console.log(users)
        }
    }
    const btn_add = document.querySelector('.btn-add')
    btn_add.addEventListener('click', function(){ addTask(sessionStorage.getItem('userID'))})

    
    let check_item = document.querySelectorAll('.check')
    check_item.forEach((elem, i) => elem.addEventListener('click', function(){
    let list_item = document.querySelectorAll('.list-item')
    console.log(list_item)
    addDone(elem, i, sessionStorage.getItem('userID'), list_item)}))
})

const doList = document.querySelector('.do-list')
//рендер тасков
const renderTask = (i)=>{
    let list = document.createElement('ol')
    list.className = 'list'
    doList.append(list)
    let listItems = document.querySelectorAll('.list-item')
    listItems.forEach(elem => elem.remove())
    for (let j = 0; j<users[i].task.length; j++){
        let listItem = document.createElement('li')
        listItem.className = 'list-item'
        listItem.setAttribute('id', `${j}`)
        let task = users[i].task[j]
        listItem.textContent = task
        list.append(listItem)

        let checkBox = document.createElement('input')
        checkBox.setAttribute('type',"checkbox")
        checkBox.className = 'check'
        if (users[i].check[j] == true){
            checkBox.setAttribute('checked', 'checked')
            listItem.classList.add('done')
        }
        listItem.append(checkBox)
    }
}

//Добавление задания
const addTask = (id)=>{

const toDo_list = document.querySelector('.list')
let list_item = document.querySelectorAll('.list-item')
const inputAdd = document.querySelector('.add-do-area')
//добавление текста
let item = document.createElement('li')
item.className = 'list-item'
item.setAttribute('id', `${list_item.length+1}`)
item.textContent = inputAdd.value
toDo_list.append(item)
users[id].task.push(item.textContent)
//добавление чекбоса
let checkBox = document.createElement('input')
checkBox.setAttribute('type',"checkbox")
checkBox.className = 'check'
checkBox.setAttribute('id', `${list_item.length+1}`)
item.append(checkBox)
users[id].check.push(false)

}

//Отметка выполнения задания
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

