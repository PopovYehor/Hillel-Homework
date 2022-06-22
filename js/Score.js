class Score{
    constructor(){
        this.menu = new Menu()
        this.level = new Level().level
        this.counter = new Counter().count
    }
    createScore(){
        this.scoreZone = document.createElement('div')
        new Create(this.scoreZone, 'score-zone', '', this.menu)

        this.scoreTitle = document.createElement('h2')
        new Create(this.scoreTitle, 'score-title', 'Score', this.scoreZone)

        this.scoreItem = document.createElement('p')
        new Create(this.scoreItem, 'score', '0', this.scoreZone)

    }
    getScore(score){
        this.score = document.querySelector('.score')
        this.score.textContent = score
    }
}