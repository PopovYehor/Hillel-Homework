import "./style.scss"
import { createElem } from "../../helper/createElement"
import { advertising } from "./advertising"
import { promoution } from "./promoution/promoution-index"
import { special } from "./special/special-index"
import { testDrive } from "./test-drive/test-drive-index"
import { client } from "./client/client-index"
import { review } from "./review/review-index"

import { catalogSelect } from "../../components/catalog/catalog-select"
import { catalogItems } from "../../components/catalog/catalog-item"
import { catalogTitle } from "../../components/catalog/catalog-title"
import { viewAll } from "../../components/catalog/view-all"
import { question } from "../../components/question"
import { map } from "../../components/question/map"

const Main = ()=>{
    const maine = document.getElementById('main')
    createElem('div', 'advertising', null, maine)
    advertising()

    createElem('div', 'promoution-wrap', null, maine)
    promoution()

    const catalogWrap = createElem('div', 'catalog-wrap', null, maine)
    catalogTitle('Каталог кресел', catalogWrap, '-main')
    catalogSelect()
    catalogItems()
    viewAll()

    createElem('div', 'specials-wrap', null, maine)
    special()

    createElem('div', 'test-wrap', null, maine)
    testDrive()

    createElem('div', 'client-wrap', null, maine)
    client()

    createElem('div', 'reviews-wrap', null, maine)
    review()

    createElem('div', 'question-wrap', null, maine)
    question()
    map('main')
}

export default Main