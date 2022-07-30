import "./bayer-data-style.scss"

const bayerData = ()=>{
    const wrap = document.querySelector('.bayer-data-wrap')
    let elem = `
    <div class="bayer-data-container">
        <h2>Ваши данные</h2>
        <p>Заполните все обязательные поля, чтобы мы смогли с вами связаться для уточнения заказа</p>
        <input type="text" placeholder="Ваше имя">
        <input type="text" placeholder="Электронная почта (не обязательно)">
        <input type="text" placeholder="Телефон">
    </div>
    `
    wrap.innerHTML = elem
}

export {bayerData}