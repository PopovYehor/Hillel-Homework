class Level{
    constructor(){
        this.level = Level.step || 1
    }

    createLvl(){
        this.menu = new Menu()
        this.lvlZone = document.createElement('div')
        new Create(this.lvlZone, 'lvl-zone', '', this.menu)

        this.lvlTitle = document.createElement('h2')
        new Create(this.lvlTitle, 'lvl-title', 'Level', this.lvlZone)

        this.lvl = document.createElement('p')
        new Create(this.lvl, 'lvl', this.level, this.lvlZone)
    }
    addLevel(){
        this.counter = new Counter().count;
        this.lvl = document.querySelector('.lvl')
            if (this.counter%10==0){
            Level.step = (Level.step|| 1) + 1
            this.lvl.textContent = Level.step
        }
    }

}