import "./catalog-style.scss"
import { createElem } from "../../../helper/createElement"
import { catalogSelect } from "./catalog-selects/catalog-selects-index"
import { catalogItems } from "./catalog-items/catalog-items-index"
const catalog = ()=>{
    const wrap = document.querySelector('.catalog-wrap')

    createElem('div', 'catalog-title', null, wrap)
    const title = document.querySelector('.catalog-title')
    createElem('span', null, 'Каталог кресел', title)

    createElem('div', 'catalog-lists-selects', null, wrap)
    catalogSelect()

    createElem('div', 'chair-wrap', null, wrap)
    catalogItems()

    createElem('div', 'view-all-chair', null, wrap)
    const viewAll = document.querySelector('.view-all-chair')
    createElem('a', 'show-all-chair', 'Показать все', viewAll)

}
export {catalog}