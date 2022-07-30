import "./style.scss"
import { createElem } from "../../../helper/createElement"
const catalogTitle = (text, wrapper, classes = '')=>{
    let wrap = wrapper
    createElem('div', 'catalog-title', null, wrap)
    const title = document.querySelector('.catalog-title')
    createElem('div', `primary-catalog-title${classes}`, null, title)
    const titleWrap = document.querySelector(`.primary-catalog-title${classes}`)
    createElem('h1', null, text, titleWrap)
}
export {catalogTitle}