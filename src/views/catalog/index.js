import "./style.scss"
import { createElem } from "../../helper/createElement"
import { switchItem,  svgSwitch} from "../../components/switch"
import { sortCatalog } from "../../components/catalog/sort-catalog"
import { catalogSelect } from "../../components/catalog/catalog-select"
import { catalogItems } from "../../components/catalog/catalog-item"
import { catalogTitle } from "../../components/catalog/catalog-title"
import { viewAll } from "../../components/catalog/view-all"
import { question } from "../../components/question"
import { map } from "../../components/question/map"
const Catalog = ()=>{
    const wrap = document.getElementById('main')
    createElem('div', 'switch-wrap', null, wrap)
    const SwitchWrap = document.querySelector('.switch-wrap')
    createElem('div', 'switch-line', null, SwitchWrap)
    switchItem('Главная', null, '/')
    svgSwitch('1')
    switchItem('Каталог', 'active', '/catalog')

    const catalogWrap = createElem('div', 'catalog-wrap', null, wrap)
    catalogTitle('Каталог', catalogWrap)
    sortCatalog()
    
    catalogSelect()
    catalogItems()

    viewAll()

    createElem('div', 'question-wrap', null, wrap)
    question()
    map('catalog')
}

export default Catalog