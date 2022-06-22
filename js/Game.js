class Game{
    constructor() {
        this.level = new Level().level
        this.level<10 ? this.interval = 1000 / `1.${this.level}` : this.interval = 1000 / `2.${this.level}`
    }

    start(){
        new Play().addEventListener('click', function(){
        new Timer().time()
        new Game().setStartInterval()
    })
    }

    gameOver(){
        this.ball = document.querySelectorAll('.ball')
        this.ball.forEach(elem => elem.remove())
        clearInterval(1) //this.timeInterval
        clearInterval(2) //this.intervalStart
    }

    setStartInterval(){
        this.intervalStart = setInterval(() => {
            new ControlBall().init()
        },new Game().interval)
    }
}
