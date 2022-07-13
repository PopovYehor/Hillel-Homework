const createP = (tag, clas, text, element2)=>{
    let element = document.createElement(tag)
    element.className = clas
    element.textContent = text
    element2.append(element)
}


const init = ()=>{
    createP('div', "container", '', document.body)
    
    const container = document.querySelector('.container')
    createP('div', "search-wrap", '', container)
    const searchWrap = document.querySelector('.search-wrap')
    createP('div', "region-wrap", '', searchWrap)
    const regionWrap = document.querySelector('.region-wrap')
    createP('h2', 'title', 'Locations', regionWrap)
    createP('div', "region-list-wrap", '', regionWrap)
    createP('div', "type-list-wrap", '', searchWrap)
    const typeList = document.querySelector('.type-list-wrap')
    createP('h2', 'title', 'Types', typeList)
    
    createP('div', "pokemon-list-wrap", '', container)
    const pokemonList = document.querySelector('.pokemon-list-wrap')
    createP('h2', 'pokemon-list-title', "Pokemon names", pokemonList)
    createP('div', 'pokemon-list', '', pokemonList)
    
    createP('div', 'pokemon-info-wrap', '', container)
    const pokemonInfo = document.querySelector('.pokemon-info-wrap')
    createP('h1', 'title', 'Pokemon', pokemonInfo)
    createP('div', "pokemon-title-wrap", '', pokemonInfo)
    createP('div', "select-pokemon", '', pokemonInfo)
    
    createP('div', "pokemon-list-favorites-wrap", '', container)
    const favoriteList = document.querySelector('.pokemon-list-favorites-wrap')
    createP('h2', 'title', 'Favorite List', favoriteList)
    createP('div', 'pokemon-list-favorites', '', favoriteList)
}
init()