import "./style.scss"
import { createElem } from "../../helper/createElement"
import { switchItem, svgSwitch } from "../../components/switch"
import { productCart } from "./product-cart/product-cart-index"
import { catalogTitle } from "../../components/catalog/catalog-title"
import { sortCatalog } from "../../components/catalog/sort-catalog"
import { catalogSelect } from "../../components/catalog/catalog-select"
import { catalogItems } from "../../components/catalog/catalog-item"
import { question } from "../../components/question"
import { map } from "../../components/question/map"
const Product = ()=>{
const wrap = document.getElementById('main')
    createElem('div', 'switch-wrap', null, wrap)
    const SwitchWrap = document.querySelector('.switch-wrap')
    createElem('div', 'switch-line', null, SwitchWrap)
    switchItem('Главная', null, '/')
    svgSwitch('1')
    switchItem('Каталог', null, '/catalog')
    svgSwitch('2')
    switchItem('Кресло Samurai S-2.04', 'active', '/about-product')

    createElem('div', 'description-wrap', null, wrap)
    productCart()
    
    const catalogWrap = createElem('div', 'catalog-wrap', null, wrap)
    catalogTitle('Каталог', catalogWrap)
    sortCatalog()
    
    catalogSelect()
    catalogItems()

    createElem('div', 'question-wrap', null, wrap)
    question()
    map('product')
}
export default Product