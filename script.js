function addAttribute(element, atr1, atr2, atr3, atr4, atr5, atr6){
    element.setAttribute(atr1, atr2)
    element.setAttribute(atr3, atr4)
    element.setAttribute(atr5, atr6)
}

//Создание формы 
function createForm(){
    var body = document.querySelector('body')
    var form = document.createElement('form')
    addAttribute(form, 'name', 'form')
    form.className = 'form'
    body.append(form)
}
createForm()
var form = document.forms.form

//создание формы для названия продукта
function createName(){
    var form = document.querySelector('form')
    var div = document.createElement('div')
    form.append(div)
    var label = document.createElement('label').textContent = 'Название товара (до 25 символов)'
    div.append(label)
    var nameProduct = document.createElement('input')
    addAttribute(nameProduct, 'type', 'text', 'name', 'nameInput', 'required', 'required')
    div.append(nameProduct)
}
createName()

//Создание формы для цены товара
function createPrice(){
    var form = document.querySelector('form')
    var div = document.createElement('div')
    form.append(div)
    var label = document.createElement('label').textContent = 'Цена товара'
    div.append(label)
    var priceProduct = document.createElement('input')
    addAttribute(priceProduct, 'type', 'text', 'name', 'price', 'required', 'required')
    div.append(priceProduct)
}
createPrice()

//Создание формы для ед. измерения товара
function createUnit(){
    var form = document.querySelector('form')
    var div = document.createElement('div')
    form.append(div)
    var label = document.createElement('label').textContent = 'Еденица измерения (шт, ед, кг, л)'
    div.append(label)
    var unitProduct = document.createElement('input')
    addAttribute( unitProduct, 'type', 'text', 'name', 'unit', 'required', 'required')
    div.append(unitProduct)
}
createUnit()

//Создание формы для описания товара
function createDescription(){
    var form = document.querySelector('form')
    var div = document.createElement('div')
    form.append(div)
    var label = document.createElement('label').textContent = 'Описание (до 150 символов)'
    div.append(label)
    var description = document.createElement('textarea')
    addAttribute(description, 'type', 'text', 'name', 'description', 'required', 'required')
    div.append(description)
}
createDescription()

//Создание формы для описания товара
function createLink(){
    var form = document.querySelector('form')
    var div = document.createElement('div')
    form.append(div)
    var label = document.createElement('label').textContent = 'Ссылка на проодукт'
    div.append(label)
    var link = document.createElement('input')
    addAttribute(link, 'type', 'text', 'name', 'link', 'required', 'required')
    div.append(link)
}
createLink()

//Создание кнопки отправки
function createButton(){
    var form = document.querySelector('form')
    var div = document.createElement('div')
    form.append(div)
    var button = document.createElement('button')
    addAttribute(button, 'type', 'submit', 'name', 'button')
    button.textContent = 'Отправить'
    div.append(button)
}
createButton()
var button = document.querySelector('button')

//Дополнительные функции
function addVerificationStyleTrue(elem){
    elem.style.border = '5px solid green'
    button.removeAttribute('disabled')
}
function addVerificationStyleFalse(elem){
    elem.style.border = '5px solid red'
    button.setAttribute('disabled', 'disabled')
}
function addBlur (elem){
    elem.style.border = '0.5px solid black'
    elem.style.borderRadius = '2px'
}
function addEvent (elem, func){
    elem.addEventListener('focus', function(){ elem.addEventListener('keyup', func) })
    elem.addEventListener('blur', function(){ addBlur(elem)})
    }
//Регулярное выражение для названия_________________________________________
var regName = /^(?=[a-zа-я0-9.\s]{1,25}$)/igm

var nameProduct = form.elements.nameInput

function verificationName(){
    regName.test(nameProduct.value) ? (addVerificationStyleTrue(nameProduct)) : addVerificationStyleFalse(nameProduct);
}

nameProduct.addEventListener('keyup', function(e){
    if (e.code === "Space") stringName(nameProduct)
})

addEvent(nameProduct, verificationName)

//Регулярное выражение для цены_______________________________________________
var regPrice = /^(?=(\d+)((\,){0,1})((\d){0,2})$)|^(?=(\d+)((\.){0,1})((\d){0,2})$)/igm

var price = form.elements.price

function verificationPrice(){
    regPrice.test(price.value) ? addVerificationStyleTrue(price) : addVerificationStyleFalse(price)
}

addEvent(price, verificationPrice)

//Регулярное выражение для еденицы измерения___________________________________
var regUnit =/^(?=(шт)$)|^(?=(кг)$)|^(?=(ед)$)|^(?=(л)$)/

var unit = form.elements.unit

function vereficationUnit(){
    regUnit.test(unit.value) ? addVerificationStyleTrue(unit) : addVerificationStyleFalse(unit)
}

addEvent(unit, vereficationUnit)

//Регулярное выражение для описания_________________________________________________
var regDiscription =  /^(?=[a-zа-я0-9.\s]{1,150}$)/igm

var description = form.elements.description

function vereficationDescription(){
    regDiscription.test(description.value) ? addVerificationStyleTrue(description) : addVerificationStyleFalse(description)
}
description.addEventListener('keyup', function(e){
    if (e.code === 'Space') stringName(description)
})
addEvent(description, vereficationDescription)

//Регулярное выражение для ссылки___________________________________________________
var regLink = /\S+/

//Проверка на HTTP
var regHTTP = /^https?:\/\//

var link = form.elements.link

//функция для проверки ссылки
function vereficationLink(){
    regLink.test(link.value) ?
    !regHTTP.test(link.value) ? (link.value = 'https://' + link.value, addVerificationStyleTrue(link)) : (link.value , addVerificationStyleTrue(link))
    : addVerificationStyleFalse(link)
}

addEvent(link, vereficationLink)

//Проверка на капс_____________________________________________________

function stringName(elem) {
    var str = elem.value
    var splits = str.split(" ")
    var stringResult = ""
  
    for (var i = 0; i < splits.length; i++) {
      var word = splits[i]
      var firstLetter = word.substring(0, 1).toUpperCase()
      var otherLetter = word.substring(1, word.length).toLowerCase()
      stringResult += firstLetter + otherLetter + ' '
    }
   return elem.value = stringResult
  }

