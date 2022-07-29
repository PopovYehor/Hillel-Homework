import "./review-style.scss"
import { createElem } from "../../../helper/createElement"
import {rewiewItem} from "./review-item/review-item-index.js"
import {buttonLeft} from "./review-item/review-button/button-index"
import {buttonRight} from "./review-item/review-button/button-index"

let reviewCount = ['1', '1']
const review = ()=>{
    const wrap = document.querySelector('.reviews-wrap')

    createElem('div', 'review-tietle', null, wrap)
    const title = document.querySelector('.review-tietle')
    createElem('h1', null, 'Отзывы', title)

    createElem('div', 'review-items', null, wrap)
    const itemsWrap = document.querySelector('.review-items')

    createElem('div', 'review-slide-left', null, itemsWrap)
    buttonLeft()
    reviewCount.forEach((elem, i)=>{
    createElem('div', 'review-item', null, itemsWrap, 'id', `review-item-${i}`)
    rewiewItem(i)
    })

    createElem('div', 'review-slide-right', null, itemsWrap)
    buttonRight()
}

export {review}