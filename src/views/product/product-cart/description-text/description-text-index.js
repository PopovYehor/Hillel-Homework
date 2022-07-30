import "./description-text-style.scss"

const descriptionText = ()=>{
    const wrap = document.querySelector('.description-text-wrap')
    let elem = `
    <div class="primary-description-text">
                <h1 class="title-description-text">Описание товара</h1>
                <p class="description-text">Здесь будет более подробно развернуто ключевое. У нас есть шоурумы в Днепре и области, где мы всегда рады. Дат профессиональную консультацию и поделиться экспертизой. У нас есть шоурумы в Днепре и области, где мы всегда рады видеть вас.</p>
                <p class="description-deploy" href="#">Развернуть <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#0074D4" stroke-width="1.2"/>
                    </svg>
                </p>
            </div>
            <div class="secondary-description-text">
                <div class="primary-description-text">
                    <h1 class="title-description-text">Характеристики</h1>
                    <div class="characteristics-description-text">
                        <p class="description-text">Высота кресла</p>
                        <p class="description-text">1170-1230 мм</p>
                        <p class="description-text">Высота сиденья</p>
                        <p class="description-text">460-520 мм</p>
                        <p class="description-text">Высота спинки</p>
                        <p class="description-text">745 мм</p>
                        <p class="description-text">Ширина сиденья</p>
                        <p class="description-text">510 мм</p>
                    </div>

                    <p class="description-deploy" href="#">Развернуть <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#0074D4" stroke-width="1.2"/>
                        </svg>
                    </p>
                </div>
            </div>
    `
    wrap.innerHTML = elem
}
export {descriptionText}