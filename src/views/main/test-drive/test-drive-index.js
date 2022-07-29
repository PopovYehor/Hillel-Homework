import "./test-drive-style.scss"
const testDrive = ()=>{
    const elem = `
    <div class="test-drive-wrap">
        <div class="transform-test-drive">
            <div class="title-test-drive">
                <div>
                <span class="title-test-drive-description">Посетите салон и проведите тест-драйв лично</span>
                </div>
                <div class ="title-test-drive-description-add">
                <span >У нас есть шоурумы в Москве и Санкт-Петербурге, где мы всегда рады видеть вас. Дат профессиональную консультацию и поделиться экспертизой</span>
                </div>
                <div>
                <button class="title-entry">Запись на тест-драйв</button>
                </div>
            </div>

            <div >
                <img class="tite-image" src="https://s3-alpha-sig.figma.com/img/c37a/018e/c939a2b0c1ec5ca57f0dead322b21402?Expires=1659312000&Signature=EHbI3qZiq9RTRdQi1Zpfpj7MKs~aXb10yWD6uJyp2xjUsXeF7-a3hHXmIDHevsfrFjOBaka2Qc3AKKFeY0s2X0zY~hSNd9H7HATBaKktcbwt7~4~RJ2UFUTvzyB5BK~twJXeLJVeXrXLnxmJQlWu1KDX41Ny6VOKPGpBr9ETzM-ojzgPFlMLe52R4DPPe-oRMjFkryMJqQgFv7V9ePNwIdiA1kCUDiojh6l0V6jZiQmAq~BOpt0fIAuwiRfeV5eX-iKqezfyKOAf1lfuTrQabSRbvcLSGsEOZ8mahdyDUAt5gumRyMR~PAMqMQjS2Hhsm9mitWFE4eG4XNcjRMh5gw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
            </div>
            <div >
                <img class="tite-image-2" src="https://s3-alpha-sig.figma.com/img/d565/90c7/fc03e5d5e89b4363653c7d220203694b?Expires=1659312000&Signature=FcZdoOf7viYYFe4QTd0oVdmxNDiDLQ08Mhc7RZOuG~4SXjiByC~knJ5byP7x3urETi3L4w2KUKEBllGvRBzUdvxTqpNwTxbXmhLPf4gW-1-xyyUHIiAJe2JNKtxqZQSZZVuSTLrgWicKAnGTbcSDkFpiUzq9Pqyu9hQ0KmerLaHScWdsIILI3qVwyMKMR20SrKB9cYxo89Rk1jITA9rVs50LpLUos4Q1e~xtWgjtsoPloZhiPscIiNCoYOcOEtaWOQKT4gsJTowJheBjARosakbDoCx4VZlWMN5c9EuNyQN-krgNas~8sCQiU2YVN6P241KqCbL2YY~yBa8xgbHv6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
            </div>

        </div>
    </div>
    `
    const wrap = document.querySelector('.test-wrap')
    wrap.innerHTML= elem

}
export {testDrive}