
import { createElem } from "../../helper/createElement"
import { advertising } from "./advertising"
import { promoution } from "./promoution/promoution-index"
import { catalog } from "./catalog/catalog-index"
import { special } from "./special/special-index"
import { testDrive } from "./test-drive/test-drive-index"
import { client } from "./client/client-index"
import { review } from "./review/review-index"
import { question } from "./question/question-index"
import { footer } from "../footer"

const main = ()=>{
    const maine = document.getElementById('main')
    createElem('div', 'advertising', null, maine)
    advertising()
    createElem('div', 'promoution-wrap', null, maine)
    promoution()
    createElem('div', 'catalog-wrap', null, maine)
    catalog()
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
    createElem('footer', null, null, maine)
    footer()
}

export default main