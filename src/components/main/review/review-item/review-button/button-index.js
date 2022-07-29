
const buttonLeft = ()=>{
    const elem = `
    <button class="slide"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
    `
    const wrap = document.querySelector('.review-slide-left')
    wrap.innerHTML = elem
}
const buttonRight = ()=>{
    const elem = `
    <button class="slide"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7 7L1 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>                        
        </button>
    `
    const wrap = document.querySelector('.review-slide-right')
    wrap.innerHTML = elem
}

export {buttonLeft, buttonRight}