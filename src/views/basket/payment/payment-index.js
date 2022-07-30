import "../basket-delivery/delivery-style.scss"

const paymant = ()=>{
    let elem = `
    <div class="delivery-wrap">
        <div class="delivery-container">
            <h2>Оплата</h2>
            <div class="delivery-item">
                <div class="checkbox-item"><div class="check"></div></div>
                <div class="delivery-item-text">
                <h3>Транспортной компании</h3>
                <p>По всей стране, услуги ТК оплачиваются отдельно при получении</p>
                </div>
            </div>
            <div class="delivery-item">
                <div class="checkbox-item"><div class="check"></div></div>
                <div class="delivery-item-text">
                <h3>Транспортной компании</h3>
                <p>По всей стране, услуги ТК оплачиваются отдельно при получении</p>
                </div>
            </div>
            <div class="delivery-item">
                <div class="checkbox-item"><div class="check"></div></div>
                <div class="delivery-item-text">
                <h3>Транспортной компании</h3>
                <p>По всей стране, услуги ТК оплачиваются отдельно при получении</p>
                </div>
            </div>
        </div>
    </div>
    `
    const wrap = document.getElementById('paymant-wrap')
    wrap.innerHTML = elem
}

export {paymant}