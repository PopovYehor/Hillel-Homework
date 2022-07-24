import { createElem } from "../../helper/createElement"

const createTableElement = (name, surname, dateBirth, rating, i)=>{
  const tableContent = document.querySelector('.mdc-data-table__content')

  createElem('tr', 'mdc-data-table__row', null, tableContent, 'id', `number-${i}`)
  const tableRow = document.getElementById(`number-${i}`)

  createElem('th', 'mdc-data-table__cell', `${name}`, tableRow, 'scope', 'row')
  createElem('th', 'mdc-data-table__cell', `${surname}`, tableRow, 'scope', 'row')
  createElem('td', 'mdc-data-table__cell mdc-data-table__cell--numeric', `${dateBirth}`, tableRow)
  createElem('td', 'mdc-data-table__cell mdc-data-table__cell--numeric', `${rating}`, tableRow)
  
}
export {createTableElement}