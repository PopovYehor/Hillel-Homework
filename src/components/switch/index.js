import "./style.scss"
import { createElem } from "../../helper/createElement"
import { onHandleRoute } from "../../helper/route"
const switchItem = (text, clas = null, href)=>{
    const switchLine= document.querySelector('.switch-line')
    let a = createElem('a', clas, text, switchLine, 'href', href)
    a.addEventListener('click', onHandleRoute)
}
const svgSwitch = (i)=>{
    const wrap = document.querySelector('.switch-line')
    const elem = `
    <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.125 6.25L3.875 3.5L1.125 0.75" stroke="#CED2DA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    `
    createElem('div', 'switch-svg', null, wrap, 'id', `switch-svg-${i}`)
    const svgWrap = document.getElementById(`switch-svg-${i}`)
    svgWrap.innerHTML = elem
}
export {switchItem, svgSwitch}