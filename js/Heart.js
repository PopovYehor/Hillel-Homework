class Heart{
constructor(){
    this.hearts = 3
}
createHeart(){
    this.menu = new Menu()
    this.heartZone = document.createElement('div')
    new Create(this.heartZone, 'heart-zone', '', this.menu)

    this.HeartList = document.createElement('ul')
    new Create(this.HeartList, 'heart-list', '', this.heartZone)

    for (let i = 0; i<this.hearts; i++){
    this.heartItem = document.createElement('li')
    new Create(this.heartItem, 'heart-item', '', this.HeartList)

    this.heart = document.createElement('img')
    this.heart.src = 'heart.png'
    new Create(this.heart, 'heart', '', this.heartItem)
    }
}
hitHeart(){
    this.HeartList = document.querySelector('.heart-list')
    this.HeartList.lastChild.remove()
}
isHeartList(){
    this.HeartList = document.querySelector('.heart-list')
    return this.HeartList
}
}