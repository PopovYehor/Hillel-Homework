import { createElem } from "../../../helper/createElement"
import "./style.scss"
const viewAll = ()=>{
    const wrap = document.querySelector('.catalog-wrap')
    const viewAllWrap = createElem('div', 'view-all-chair', null, wrap)
    createElem('a', 'show-all-chair', 'Показать все', viewAllWrap, 'href', '#')
}
export {viewAll}