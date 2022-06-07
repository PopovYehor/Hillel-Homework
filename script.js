//Сущность Worker 
const worker = {
    name : '',
    surname: '',
    position: '',
    rate: '',
    days: '',
    getSalary:()=>{
            const salary = worker.rate * worker.days
            return salary
        }
}
//Сущность покупатель
const byer = {
    name : '',
    surname: '',
    phone: '',
    sale: '',
}
//Сущность товар
const product = {
    name: '',
    price: '',
}
//Aдмин
admin (teller){
    const changeProductPrice = (elem) => {
    product.price = elem
}
    const managementWorkers = () => {
        return ({
            addName: (elem) =>{
                worker.name = elem
            },
            addSurname: (elem) => {
                worker.surname = elem
            },
            addPosition: (elem) =>{
                worker.position = elem
            },
            addRate: (elem) =>{
                worker.rate = elem
            },
            addDays: (elem) =>{
                worker.days = elem
            },
        })
}
const management = managementWorkers()
}
//Касир
teller (assistent){
const addByer = (byerName, byerSurname, byerPhone, byerSale) => {
    byer.name = ''
    byer.surname = ''
    byer.phone = ''
    byer.sale = ''
}
const makeReceipt = () =>{
    const receipt = ''
    for (let i = 0; i<basket.length; i++){
        receipt += basket[i]
    }
    return receipt
}
}
//Консультант
assistent (worker){
    const basket = []
    const addToBasket = (product) => {
        basket.push(product)
    }
}

