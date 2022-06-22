class Play{
    constructor(){
        this.isPlay()
        return this.play
    }
    createButton(){
            this.menu = new Menu()
            this.play = document.createElement('button')
            new Create(this.play, 'play', 'PLAY', this.menu)
    }
    isPlay(){
        this.play = document.querySelector('.play')
    }
}