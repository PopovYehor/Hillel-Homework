const initTable = ()=>{
    let table = `<div class="mdc-data-table">
    <div class="mdc-data-table__table-container">
      <table class="mdc-data-table__table" aria-label="Рейтинг студентів">
        <thead>
          <tr class="mdc-data-table__header-row">
            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Ім'я</th>
            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Призвище</th>
            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Дата народження</th>
            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Рейтинг</th>
          </tr>
        </thead>
        <tbody class="mdc-data-table__content">
          
        </tbody>
      </table>
    </div>
  
    <div class="mdc-data-table__progress-indicator">
      <div class="mdc-data-table__scrim"></div>
      <div class="mdc-linear-progress mdc-linear-progress--indeterminate mdc-data-table__linear-progress" role="progressbar" aria-label="Data is being loaded...">
        <div class="mdc-linear-progress__buffer">
          <div class="mdc-linear-progress__buffer-bar"></div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>
    </div>
  </div>`
  const root = document.getElementById('root')
  root.innerHTML = table
}

export {initTable}