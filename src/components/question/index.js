import "./style.scss"

const question = ()=>{
    const elem = `
    <div class="question-call-background">
        <div class="question-call-wrap">
            <div class="question-call-description">
                <div class="question-call-description-text">
                    <h2>У вас остались вопросы?</h2>
                    <h3>Оставьте контакты. Наш менеджер свяжется с вами и бесплатно проконсультирует</h3>
                </div>
                <div class="question-call-description-img">
                    <img class="hand-phone" src="https://s3-alpha-sig.figma.com/img/ae33/321b/34ac43313d9bfde992b123de4f5d071d?Expires=1659312000&Signature=XzA07DWp-LefW4vY1yAnnr~hqQsb7Iw6FFmHMjgpeHRbTinM4awNk1SI-cyG1n8CqKWyRDa~UIORAAjGsnQjVJeEi0rx0mL1e2JIF5Q4GdfwekbTrXmNbgTNbPJVN6v92xyHvcuIqqCVHXkjCbwzcoKAUpH7uQMPu3iOOF8KyCXS467sSOa-~SOWkUTtCRBgUEzHoSXbwitC8TW~HNQT4Ts2sl6LTEcKRw8TuTPCdFwdWVPkbZVIcwYVCZsAbsccvG-LwJLpY2RSiiKTGPqKxVTojVPW5R-2A~5YpFklQpiJdrVFwO594Kp7GbNwV8PuLsyNs06nIWNlgx6wqMta-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
                </div>
            </div>
            <div class="contact-form">
                <input class="contact-name" type="text" placeholder="&#xf007; Ваше имя">
                <input class="contact-name" type="text" placeholder="&#xf879; Телефон для связи">
                <button class="order-call">Заказать звонок</button>
            </div>
        </div>
    </div>
    `
    const wrap = document.querySelector('.question-wrap')
    wrap.innerHTML = elem
}
export {question}