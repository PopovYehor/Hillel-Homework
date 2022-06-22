class Timer{
    constructor(){
        this.interval = 1000
    }
    createTimer(){
        this.menu = new Menu()
        this.timerZone = document.createElement('div')
        new Create(this.timerZone, 'time-zone', '', this.menu)

        this.timeTitle = document.createElement('h2')
        new Create(this.timeTitle, 'lvl-title', 'Time', this.timerZone)

        this.timer = document.createElement('p')
        new Create(this.timer, 'time', '00:00', this.timerZone)
    }
    
    time() {
        this.min = 0
        this.sec = 0
        this.timeInterval = setInterval(()=>{
            this.timer = document.querySelector('.time')
            this.sec++
        if (this.sec >= 60){
            this.sec = this.sec - 60
            this.min ++
        }
        if (this.sec < 10){
            this.min < 10 ? this.timer.innerHTML = '0'+this.min+':'+'0'+this.sec : this.timer.innerHTML = this.min+':'+'0'+this.sec
        }
        if (this.min < 10){
            this.sec < 10 ? this.timer.innerHTML = '0'+this.min+':'+'0'+this.sec : this.timer.innerHTML = '0'+this.min+':'+this.sec
        }
        else{
            this.timer.innerHTML = this.min + this.sec
        }
        }, this.interval)
        
    }

}
