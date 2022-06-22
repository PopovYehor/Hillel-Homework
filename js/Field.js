class Field{
    constructor(){
        this.isField()
        this.field
    }
    createField(){
        this.field = document.createElement('div')
        new Create(this.field, 'field', '', document.body)
        
    }
    isField(){
        this.field = document.querySelector('.field')
    }
}