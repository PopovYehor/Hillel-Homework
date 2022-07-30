import { createElem } from "../../../helper/createElement"
const map = (clas)=>{
    const wrap = document.querySelector('.question-wrap')
createElem('img', `map-${clas}`, null, wrap, 'src', "https://i.ibb.co/GxcDB3h/map.png")
createElem('img', `map-point-${clas}`, null, wrap, 'src', 'https://cdn-icons-png.flaticon.com/512/149/149060.png')
}
export {map}