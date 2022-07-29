import "./client-style.scss"
const client = ()=>{
const elem = `
<div class="client-title">
        <h1>Наши клиенты</h1>
    </div>
    <ul class="client-list">
        <img id="client-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Ukrzalisnytsia_logo_%28before_2018%29.png/120px-Ukrzalisnytsia_logo_%28before_2018%29.png" alt="">
        <img id="client-2" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9F%D0%86%D0%92%D0%94%D0%95%D0%9D%D0%9C%D0%90%D0%A8%D1%83.png" alt="">
        <img id="client-3" src="https://upload.wikimedia.org/wikipedia/commons/4/48/Logo_metinvest_ukr.png?20220210123219" alt="">
        <img id="client-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Naftogaz_logo.png/799px-Naftogaz_logo.png" alt="">
        <img id="client-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/%D0%9F%D1%80%D0%B8%D0%B2%D0%B0%D1%82%D0%91%D0%B0%D0%BD%D0%BA.png/800px-%D0%9F%D1%80%D0%B8%D0%B2%D0%B0%D1%82%D0%91%D0%B0%D0%BD%D0%BA.png" alt="">
        <img id="client-6" src="https://upload.wikimedia.org/wikipedia/uk/thumb/e/ee/Ukraine_International_Airlines_Logo.svg/380px-Ukraine_International_Airlines_Logo.svg.png?20150724063812" alt="">
    </ul>
`
const wrap = document.querySelector('.client-wrap')
wrap.innerHTML = elem
}
export {client}