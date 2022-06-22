class Menu{
   constructor(){
    this.isMenu()
    return this.menu
   }
    createMenu(){
        this.menu = document.createElement('div')
        new Create(this.menu, 'menu','', document.body)
    }
    isMenu(){
        this.menu = document.querySelector('.menu')
        return this.menu
    }
}