class Counter{
    constructor(){
        this.count = Counter.step || 0
    }
    createCounter(){
        this.menu = new Menu()
        this.counterZone = document.createElement('div')
        new Create(this.counterZone, 'counter-zone', '', this.menu)

        this.conterTitle = document.createElement('h2')
        new Create(this.conterTitle, 'counter-title', 'Counter', this.counterZone)

        this.counter = document.createElement('p')
        new Create(this.counter, 'count', this.count, this.counterZone)
    }
    addCount(){
       Counter.step = (Counter.step || 0) + 1
       this.counter = document.querySelector('.count')
       this.counter.textContent = Counter.step
        return Counter.step
    }
}