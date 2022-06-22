
const render = ()=>{
new Menu().createMenu()
new Play().createButton()
new Timer().createTimer()
new Counter().createCounter()
new Level().createLvl()
new Heart().createHeart()
new Score().createScore()
new Field().createField()
}
render()
new Game().start()
