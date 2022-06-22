class ControlBall{
    constructor() {
        this.heartList = new Heart().isHeartList()
        this.field = new Field().field
        this.level = new Level().level
        this.counter = new Counter().count
        this.level < 10 ? (this.size = 50 / `1.${this.level}` , this.speed = 1 * `1.${this.level}`) : (this.size = 50 / `2.${this.level}` , this.speed = 1 * `2.${this.level}`)
        this.interval = 20;

    }
    init(){
        this.generateBall();
        this.move()
    }
    generateBall(){
        this.ball = new Ball(this.size, this.generateX())
        this.ball.addEventListener('click', () => {
            this.destroy();
            new Counter().addCount()
            new Level().addLevel()
            new Score().getScore(this.level*this.counter)
            clearInterval(this.moveInterval)
        })
    }
    generateX(){
        this.rectField = this.field.getBoundingClientRect()
        return Math.ceil(Math.random() * ((this.rectField.right-this.size)-this.rectField.left)+this.rectField.left)
    }
    destroy(){
        this.ball.remove();
        delete this;
    }
       
    move(){
        this.fieldTop = this.field.getBoundingClientRect().top
        this.y = this.fieldTop

        this.moveInterval = setInterval(() => {
           this.y += this.speed;
            this.ball.style.top = `${this.y}px`;
            if((this.ball.style.top).replace('px', '') > this.field.offsetHeight){
                if (this.heartList.hasChildNodes()){
                clearInterval(this.moveInterval)
                this.destroy()
                new Heart().hitHeart()
                }
                if(!this.heartList.hasChildNodes()){
                    new Game().gameOver()
                    clearInterval(this.moveInterval)
                }
            }
        }, this.interval)
    }
}