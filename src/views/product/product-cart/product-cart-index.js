import "./product-cart-style.scss"
import { createElem } from "../../../helper/createElement"
import { mainDescription } from "./main-description/main-description-index"
import { desctiptionPhoto } from "./description-photo/description-photo-index"
import { descriptionText } from "./description-text/description-text-index"
const productCart = ()=>{
const wrap = document.querySelector('.description-wrap')
    createElem('div', 'main-description-wrap',null, wrap)
    mainDescription()
    createElem('div', 'description-photo-wrap', null, wrap)
    desctiptionPhoto()
    createElem('div', 'description-text-wrap', null, wrap)
    descriptionText()
}
export {productCart}