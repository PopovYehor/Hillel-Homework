import "./special-style.scss"

const special = ()=>{
    const elem = `
    <div class="special-title">
        <h1 class="special-title-primary">Особенности кресел Самурай</h1>
        <h2 class="special-title-secondary">Здесь будет более подробно развернуто ключевое преимущество. Четвертое поколение Samurai, выпускаемое с сентября 2020 года. Исправлены десятки недочетов предыдущих поколений</h2>
    </div>
    <div class="special-desctiption-wrap">
        <div class="specials-decription">
            <div class="box-1">
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item active">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
            </div>
                
            <div class="box-2">
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
            </div>
            <div class="box-img">
                <img class="special-description-img" src="https://s3-alpha-sig.figma.com/img/de98/542c/afc0080a44931c318326ffa1ce319bad?Expires=1659916800&Signature=H~DwVlQldM3N0qi5OQ-h~hzRZZlYSpndECydM8YK7utCj2XqGNF62av5YZVFQAwQFRd5O0mk-L5xmKrv15UswOzY9RI1EPvMkxbZJFMc8irDBwTIkGuiwCQN~LphG61fkjLpnPU4Jza3srHXf2WLdlSm1rAY4-GjqzPr5rCeBIX8vmjJK4Ubn-K6DLIgGFydNxOKm24TZq3y08cKdZ~7xVmnqGyGYoADpiAelDER9o-Exf-LcDg3BcnFit1wd3ZFO-3HLnw5aMC5BRcbaL3KJmtJM1mSQaUorLbTUsNInw5yyIBLUzfgiQUj5xMuL-~LUXbLb1RY6P8fI9Lwj6Z3Pw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">                                    
                </div>
        </div>
    </div>
    `
    const wrap = document.querySelector('.specials-wrap')
    wrap.innerHTML = elem
}

export {special}