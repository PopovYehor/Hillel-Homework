import "./main-description-style.scss"

const mainDescription = ()=>{
    const wrap = document.querySelector('.main-description-wrap')
    let element = `
    <div class="description-img">
            <img src="https://s3-alpha-sig.figma.com/img/ea10/bd46/5059ec5f7e284c763688ac44fb733ac2?Expires=1659312000&Signature=c8NrWAcSJ3-XAKOIIXoSki9v7eFRxI9ey9OMxCWZcJhIEaf9rlA114xTyWbH5YZz8kCsVD1nIyzMrTzwvfqhd3fk-~k8z-dl8Yom8SJRpBIuOOjovl9DqMtHMYGe~K2LIWLHYDb~Nj0U2bNAkQBFo1-sdjm-QcHzioFlMhyf7e4OX1NAxkq~SuC-wz732WmI6kXXpbBqSyBzhScnmKC1EZtZYa78Qp0uSfjmVInhv4QV7-dXSLBrsIxabEKduOI98m~tJafJrKJ5osc8HQkNSaX9rgkEHwi955F4ayfXa-3-n2WZbPAoarALO0erJXNkrAYnyDosRN9j5Pk7heIaeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
        </div>
        <div class="sale-description">
            <div class="title-description">
                <h1>Кресло Samurai S-2.04 плюс вторая строка</h1>
            </div>
            <div class="secondary-description">
                <h2>Эргономичное офисное кресло с синхромеханизмом качания «MultiBlock» — раздельное синхронное отклонение спинки и сиденья кресла.</h2>
            </div>
            <div class="color-description">
                <span>Черный</span>
            </div>
            <div class="choise-img">
                <div class="description-img-choise ">
                    <img src="https://s3-alpha-sig.figma.com/img/2821/7c5c/6a786113fa27077e852ad7429f839d30?Expires=1659312000&Signature=e0lmg0ZfxkutUVtZU~rSgRPughGV2Sbo5gwwA1icYrPmLJVbhDYrjCGcUHaj9wgf58pnHIej9XxlTVWLPlgWZvOv7EzR2Qo53grc-HyJ~8m~YERBMXGCNPI-6wsyJ-WLwdlqMwnbukmrYe7g7RvSHjpgn87L0D1tq9XApICxazXBmgizLGGI5ftyjDaVUFVkJCdOzSIkOAeg4KIBQwztw6JWY6IxowY1Oy9UqMlj321QMzYF8B62guPc1WLC6LWQro2Ay3GsntQSprHaGfF0yijpWpr6gKQI5yCVroEdgESE21HWDA1MBdlrBNTHQQ2p6Aw1qBPBokPChb9CW6IXww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
                </div>
                <div class="description-img-choise active">
                    <img src="https://s3-alpha-sig.figma.com/img/ea10/bd46/5059ec5f7e284c763688ac44fb733ac2?Expires=1659312000&Signature=c8NrWAcSJ3-XAKOIIXoSki9v7eFRxI9ey9OMxCWZcJhIEaf9rlA114xTyWbH5YZz8kCsVD1nIyzMrTzwvfqhd3fk-~k8z-dl8Yom8SJRpBIuOOjovl9DqMtHMYGe~K2LIWLHYDb~Nj0U2bNAkQBFo1-sdjm-QcHzioFlMhyf7e4OX1NAxkq~SuC-wz732WmI6kXXpbBqSyBzhScnmKC1EZtZYa78Qp0uSfjmVInhv4QV7-dXSLBrsIxabEKduOI98m~tJafJrKJ5osc8HQkNSaX9rgkEHwi955F4ayfXa-3-n2WZbPAoarALO0erJXNkrAYnyDosRN9j5Pk7heIaeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
                </div>
                <div class="description-img-choise">
                    <img src="https://s3-alpha-sig.figma.com/img/81a4/9ff2/2f9f6f61360c9777b59750b56eddd2de?Expires=1659312000&Signature=cQqaHKeMAJ-SM-GVonWOgJcP~T33jIuuOdSs9jVwuehiqc8IhSWZcsKLiDimiWS6dGsXEgxtk7x1hRQj-zTSh7J1cX49xIX1Af-jAGjoaQ0HKa7mgvPqumVYJfTIHw2dA5KQboR2famgWYHbNntuhC-bC0yVNXsicO4WItqo4vQjnDsX~DCCxMPzjRAVnUIiuiOpZuxN1D1NTefnZrkImOFA7ErGlJ5O8cHlehfMHzINBj6rZ4K53RQAzarT1~KppSkXbQhfC63h77k5DrN9N~Bdijq1qxdQHpmgNJIwUO9tKwrTGVvCej0uuvwEyxkve3oLUgtbCY4tVyThmw2xQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
                </div>
                <div class="description-img-choise">
                    <img src="https://s3-alpha-sig.figma.com/img/48b8/5917/eda4455a9bb774d83d31186ec7ff9690?Expires=1659312000&Signature=SHuN~IRM7crtSxXFXgT-QLgIsr884yaAw4FH2A4gNn0nRkym2VJ912XL~mt6dFjxynWNSbPxnKTpB9JR3wOlVpsIBalDvyFE~EiXOr3~VabjIdW98iRkCblDIskAddmlUc93OrypFgBtBufBD23nByfC079FVFxKZIHFnUdbOTStolWjW-JtW8JcNZjNNqvxFh54jWutDh116R~9s4gMbUtWSTx7hknAkjFRAOXTEZ0TOQV9ZilHWDWqw3ypAvZK-Vl1rh4CnUOOTYXn7DIS~rXTZLLEaJTiU97pTwgEWn2QTFebf2iIoYGtQqsAtXRf-yDwgKtriNsPKzSsLDFOEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
                </div>        
            </div>
            <div class="function-description">
                <span>Механизм</span>
                <p>Эргономичное офисное кресло с синхромеханизмом качания «MultiBlock» — раздельное синхронное.</p>
            </div>
            <div class="description-price">
                <svg width="128" height="10" viewBox="0 0 128 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.18545 7.90944C1.18545 7.90944 39.3344 4.12251 63.9391 2.97391C88.5189 1.82647 127 2.0321 127 2.0321" stroke="#F54D35" stroke-width="3"/>
                    </svg>  
                <p>5 500 &#8372;</p>              
                <span>5000 &#8372;</span>
            </div>
            <div class="description-add-to-basket">
                <button class="add-to-basket">&#xf07a; Добавить в корзину</button>
                    <button class="count-to-basket"><svg class="minus" width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1665 1H12.8332" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>
                    <span>1</span>
                    <button class="count-to-basket"><svg class="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 4.1665V15.8332" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.1665 10H15.8332" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                                             
                        </button>
                
            </div>
        </div> 
    `
    wrap.innerHTML = element
}

export {mainDescription}