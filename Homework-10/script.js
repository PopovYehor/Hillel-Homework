var user = [  {    name: 'Panda Vasya',    url: 'https://cutt.ly/Hn90ez7',
    description: 'Несмотря на то, что панды относятся к отряду хищных, фактически они питаются почти исключительно (более чем на 99 %) бамбуком (любым из 25 видов, присутствующих в дикой среде обитания). В день взрослая панда съедает до 30 кг бамбука и побегов.'  },
  {    name: 'Panda Petya',
    url: 'https://storage.googleapis.com/pod_public/1300/83659.jpg',
    description: 'Несмотря на то, что панды относятся к отряду хищных, Для защиты от бамбуковых щепок пищевод и желудок выстланы толстым слоем упругой слизистой ткани. Если в каком-либо месте после цветения погибает весь бамбук, то живущим там пандам грозит смерть от голода'  },
  {    name: 'Panda Fedya',
    url: 'https://images.unsplash.com/photo-1625859043880-56acbcb6a6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGElMjBiZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Несмотря на то, что панды относятся к отряду хищных, (подобные случаи отмечались в 1975 и 1983 годах). По мнению некоторых учёных, гиперзависимость медведей от бамбука могла развиться относительно недавно — около 5000 лет назад[11]. Изредка включают в свой рацион растения других видов. Кроме того, как и все медвежьи, панды всеядны: при доступности едят яйца, мелких птиц, зверьков, рыбу и некоторых насекомых, иногда — падаль'  }]

function addToWebSite(){
    for(var i = 0; i < user.length; i++){
    var body = document.querySelector('body')
    
    //Создание div
    var div = document.createElement('div')
    div.className = "container"
    
    // Созание h1
    var h1 = document.createElement('h1')
    h1.className = "title"
    var textH1 = document.createTextNode(user[i].name)
    
    //Создание картинки
    var img = document.createElement('img')
    var src = img.setAttribute("src", user[i].url)
    var alt = img.setAttribute("alt", "Панда"+"№"+[i+1])
    
    //Создание текста под картинкой
    var paragrahp = document.createElement('p')
    paragrahp.className = "dedescription"
    var textParagraph = document.createTextNode(user[i].description)

//Добавление обьектов
body.append(div),
div.append(h1),
h1.append(textH1)
div.append(img)
div.append(paragrahp)
paragrahp.append(textParagraph)
}
}
addToWebSite()