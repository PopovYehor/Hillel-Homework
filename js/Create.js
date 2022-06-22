class Create{
    constructor(element, clas, text, element2){
        element.className = clas
        element.textContent = text
        element2.append(element)
    }
}