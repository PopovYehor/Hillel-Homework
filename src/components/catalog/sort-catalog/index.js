import { createElem } from "../../../helper/createElement"

const sortCatalog = ()=>{
    const wrap = document.querySelector('.catalog-title')
    createElem('div', 'sort-catalog', null, wrap)
    const sortCatalogWrap = document.querySelector('.sort-catalog')
    let elem = `
    <select name="sort-catalog" id="">
                <option value="price-up">По возрастанию цены</option>
            </select>
    `
    sortCatalogWrap.innerHTML = elem
}
export {sortCatalog}