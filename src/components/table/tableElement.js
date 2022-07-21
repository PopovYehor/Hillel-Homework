import { createElem } from "../../helper/createElement"

const createTableElement = (name, surname, dateBirth, rating, i)=>{
    const tableContent = document.querySelector('.mdc-data-table__content')
    /* let element = `<tr class="mdc-data-table__row">
    <th class="mdc-data-table__cell" scope="row">${name}</th>
    <th class="mdc-data-table__cell" scope="row">${surname}</th>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${dateBirth}</td>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${rating}</td>
  </tr>` */

  createElem('tr', 'mdc-data-table__row', null, tableContent, 'id', `number-${i}`)
  /* let tableRow = document.createElement('tr')
  tableRow.className = 'mdc-data-table__row'
  tableContent.append(tableContent) */
  const tableRow = document.getElementById(`number-${i}`)

  createElem('th', 'mdc-data-table__cell', `${name}`, tableRow, 'scope', 'row')
  /* let tableHeader = document.createElement('th')
  tableHeader.className = 'mdc-data-table__cell' */
  createElem('th', 'mdc-data-table__cell', `${surname}`, tableRow, 'scope', 'row')
  createElem('td', 'mdc-data-table__cell mdc-data-table__cell--numeric', `${dateBirth}`, tableRow)
  createElem('td', 'mdc-data-table__cell mdc-data-table__cell--numeric', `${rating}`, tableRow)
  
}
export {createTableElement}