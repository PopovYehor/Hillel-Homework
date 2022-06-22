class Ball{
    constructor(size, x) {
        this.field = new Field().field
        this.size = size;
        this.x = x;
        this.createBall();
        return this.ball;
    }

    createBall(){
        this.fieldTop = this.field.getBoundingClientRect().top
       
        this.ball = document.createElement('div');
        new Create(this.ball, 'ball', '', this.field)
        this.ball.style.cssText = `
            width: ${this.size}px;
            height: ${this.size}px;
            background: rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255}, 0.7);
            top: ${this.fieldTop}px;
            left: ${this.x}px;`
    }

}