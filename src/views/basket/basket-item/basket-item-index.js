import "./basket-item-style.scss"
const basketItem = ()=>{
    let elem = `
    <div class="basket-item">
        <div class="item-img">
            <img src="https://s3-alpha-sig.figma.com/img/b409/5898/58644b17dca1e8a576787b2540366475?Expires=1659916800&Signature=g~DCOn2fSH6Fv6zJ4qn2U86A1xJ6AxqNHqBmupfeppOnVRTiaCRdrleLHkZ8J1cNfTfCZeuzfO3LkwiWmLdSiZgUetMlBE33bKzqHind5eCWzvk8hp-FLY6UUtVdXHu8bOVv2yBPrAlKXrivx8hxfiBNA70cr51E8gedRH-D9eKXE7iLYVKjr9GbbmfGdkPLnbKlN9WHxUwRBF2PEEfel9kd0Dt4n9kntFejo6Z9-xOQ~rNj2UCC5ABW2vb7tHS~aicUVgSfbVZsb4a2Bg-C2IhZjtKdUL3JCBdtz4KzHI81NkCHLmw6-foF7PrPZDJcswjCjp7dIyd4QpEJutzmyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
        </div>
        <div class="item-description">
            <h3>Кресло Samurai KL-1.04</h3>
            <p>Характеристики, цвет, механизм и прочее Артикул: 266-460</p>
        </div>
        <div class="count-basket">
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
        <div class="basket-price">
            <svg width="128" height="10" viewBox="0 0 128 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.18545 7.90944C1.18545 7.90944 39.3344 4.12251 63.9391 2.97391C88.5189 1.82647 127 2.0321 127 2.0321" stroke="#F54D35" stroke-width="3"/>
                </svg> 
            <p>5 500 &#8372;</p>              
            <span>5000 &#8372;</span>
        </div>
        <div class="delete-from-basket">
            <button><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5H4.16667H17.5" stroke="#959AAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.66667 5.00008V3.33341C6.66667 2.89139 6.84226 2.46746 7.15482 2.1549C7.46738 1.84234 7.89131 1.66675 8.33334 1.66675H11.6667C12.1087 1.66675 12.5326 1.84234 12.8452 2.1549C13.1577 2.46746 13.3333 2.89139 13.3333 3.33341V5.00008M15.8333 5.00008V16.6667C15.8333 17.1088 15.6577 17.5327 15.3452 17.8453C15.0326 18.1578 14.6087 18.3334 14.1667 18.3334H5.83333C5.39131 18.3334 4.96738 18.1578 4.65482 17.8453C4.34226 17.5327 4.16667 17.1088 4.16667 16.6667V5.00008H15.8333Z" stroke="#959AAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.33333 9.16675V14.1667" stroke="#959AAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.6667 9.16675V14.1667" stroke="#959AAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
    <div class="result-price">
        <svg width="128" height="10" viewBox="0 0 128 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.18545 7.90944C1.18545 7.90944 39.3344 4.12251 63.9391 2.97391C88.5189 1.82647 127 2.0321 127 2.0321" stroke="#F54D35" stroke-width="3"/>
        </svg>
        <p class="result-price-text">Итого:&nbsp;</p>
        <p class="result-price-old">5 500 &#8372;</p>
        <p>&nbsp; 5000 &#8372;</p>
    </div>
</div>
    `
    const wrap = document.querySelector('.basket-items-wrap')
    wrap.innerHTML = elem
}

export {basketItem}