//Создание элемента
const createP = (tag, clas, text, element2)=>{
    let element = document.createElement(tag)
    element.className = clas
    element.textContent = text
    element2.append(element)
}
//Инициализация страницы
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

const pokemonInfoWrap = document.querySelector('.pokemon-info-wrap')
const pokemonTitle = document.querySelector('.pokemon-title-wrap')
const selectPokemon = document.querySelector('.select-pokemon')
const favoritesList = document.querySelector('.pokemon-list-favorites')


const API = 'https://pokeapi.co/api/v2/'
const APIpokemon = `${API}pokemon/`
const APIpokemonEvoTrigger = `${API}evolution-trigger/`
const APIlocations = `${API}location-area`
const APItype = `${API}type`

const deleteElement = (elem)=>{if(elem) elem.remove()}

//---------Добавление в избранное-------------//
//Масив избранных покемонов
let favoritesPokemon = []
let favoritesPokemonId = []
//Функция добавления в избранное 
const createFavorites = (tag, clas, text, element2, pokemonName, id) =>{
    let element = document.createElement(tag)
    element.className = clas
    element.textContent = text
    element2.append(element)
    element.addEventListener('click', function(){
        let pokemonItem = document.querySelectorAll('.pokemon-item')
        for (let i = 0; i<pokemonItem.length; i++){
        if (pokemonItem[i].textContent==pokemonName){
            pokemonItem[i].classList.add('active')
        }
        }
        favoritesPokemon.push(pokemonName)
        favoritesPokemonId.push(id)
        //Добавление в стор
        sessionStorage.setItem('pokemon',JSON.stringify(favoritesPokemon))
        sessionStorage.getItem('pokemon')
        sessionStorage.setItem('pokemonId',JSON.stringify(favoritesPokemonId))
        sessionStorage.getItem('pokemonId')
        //Добавление элемента в лист избранных
        let favoritesList = document.querySelector('.pokemon-list-favorites')

        create('button', 'pokemon-item favorites', pokemonName, favoritesList, '', `${API}pokemon/${id}`)
    })
}


//--------------рендер информации о покемоне--------------//

//Функция эволюции
const evolution = (api, plusID, pokemonName)=>{
    const evoBtn = document.querySelector('.pokemon-evo-btn')
fetch(api)
    .then(res => res.json())
        .then(res => {
            let {pokemon_species} = res
            for (let i = 0; i<pokemon_species.length; i++){
                //Если  для покомена есть
                if (`${API}pokemon-species/${plusID}/` == pokemon_species[i].url){
                    deleteElement(evoBtn)
                    create('button', 'pokemon-evo-btn', `Evolution for ${pokemonName}`,  selectPokemon, '', `${APIpokemon}${plusID}`)
                    break
                }
            }
        })
}

//Функция рендера
const create = (tag, clas, text, element2, src, api, id)=>{
    let element = document.createElement(tag)
    element.className = clas
    element.textContent = text
    element2.append(element)
    //Выделение избраных покемонов
    if (sessionStorage.getItem('pokemon')){
    JSON.parse(sessionStorage.getItem('pokemon')).forEach((elem) => {
        if(element.textContent == elem){
            element.classList.add('active')
        }
    })
    }
    //Вывод информации
    if (api){
        element.addEventListener('click', ()=>{
        fetch(api)
            .then(res => res.json())
                .then(res =>{
                    let pokemonName = res.name
                    let pokemonID = res.id
                    let {front_default} = res.sprites    
                    let plusID = pokemonID+1
                    
                    let pokemonTitleItem =  document.querySelector('.pokemon-title')
                    let pokemonImg = document.querySelector('.pokemon-img')

                    deleteElement(pokemonTitleItem)
                    create('h2', 'pokemon-title', `Your Pokemon is ${pokemonName}`, pokemonTitle)
                   
                    deleteElement(pokemonImg)
                    create('img', 'pokemon-img', null, pokemonTitle, front_default)

                    //Создание кнопки эволюции
                    const evoBtn = document.querySelector('.pokemon-evo-btn')
                    let trigerCount = 10
                    for (let i = 1; i<trigerCount; i++){
                        //Если эволюция есть
                    if (evolution(`${APIpokemonEvoTrigger}${i}`, plusID, pokemonName)){
                        evolution(`${APIpokemonEvoTrigger}${i}`, plusID, pokemonName)
                        break
                    }else{//Если эволюции нет
                        deleteElement(evoBtn)
                    }
                    }
                //Кнопка добавления в избранное
                let favoriteBtn = document.querySelector('.favorite-btn')
                deleteElement(favoriteBtn)
                createFavorites('button', 'favorite-btn', 'Add to favorite list',selectPokemon, pokemonName, pokemonID)
            })     
        })
        
            }
    if (src){
    element.src = src  
    }

}


//рендер избраных покемонов при загрузке страницы
const createFavoritesListInit = ()=>{
    let storePokemons = JSON.parse(sessionStorage.getItem('pokemon'))
    let storePokemonsId = JSON.parse(sessionStorage.getItem('pokemonId'))
    for (let i = 0; i<storePokemons.length; i++){
        create('button', 'pokemon-item favorites', storePokemons[i], favoritesList, '', `${APIpokemon}${storePokemonsId[i]}`)
    }
}
if (sessionStorage.getItem('pokemon')) createFavoritesListInit()
//-------------------Список покемонов------------//

const pokemonList = document.querySelector('.pokemon-list')
let pokemonListContainer = document.querySelector('.pokemon-list-wrap')

const paginationPokemon = {
    limit: 20,
    offset: 20,
    page: 0
}

//Вывод всех покемонов
const apiRequest = ()=>{

let customLink = `?limit=${paginationPokemon.limit}&offset=${paginationPokemon.offset * paginationPokemon.page}`

fetch(`${API}pokemon${customLink}`)
.then(res => res.json())
.then(res =>{
    let {results} = res
    let pokemonItemData = results
    let pokemonListTitle = document.querySelector('.pokemon-list-title')
    deleteElement(pokemonListTitle)
    create('h2', 'pokemon-list-title', "Pokemon names", pokemonListContainer)
    pokemonItemData.forEach( (elem) =>{
        create('button', 'pokemon-item', elem.name, pokemonList, '', elem.url, elem.name)
    })
})
}

create('div', 'pagination-wrap', '', pokemonListContainer)
let paginationWrap = document.querySelector('.pagination-wrap')
createP('button', 'prev btn-pag', 'prev', paginationWrap)
createP('p', 'page', `${paginationPokemon.page +1}`, paginationWrap)
createP('button', 'next btn-pag', "next", paginationWrap)

const btnPag = document.querySelectorAll('.btn-pag')
btnPag.forEach(elem =>{
        elem.addEventListener('click', function(){
            const page = document.querySelector('.page')
        if (elem.classList.contains('next')){
            paginationPokemon.page = paginationPokemon.page + 1
            page.textContent = paginationPokemon.page +1
        }
        if (elem.classList.contains('prev')){
            if(paginationPokemon.page > 0){
                paginationPokemon.page = paginationPokemon.page - 1
                page.textContent = paginationPokemon.page +1
                }else{
                    paginationPokemon.page = 0
                }
        }
        pokemonList.innerHTML = ''
        apiRequest()
    })
})
apiRequest()


//-----------------Получение регионов--------------//
//Кнопка региона
const createRegions = (tag, clas, text, element2, src, api, id)=>{
    let element = document.createElement(tag)
    element.className = clas
    element.textContent = text
    element2.append(element)

    element.addEventListener('click', ()=>{
        fetch(api)
            .then(res => res.json())
                .then(res =>{
                    let {pokemon_encounters} = res
                    let pokemonItems = document.querySelectorAll('.pokemon-item')
                    
                    if (pokemonItems)pokemonItems.forEach(elem => elem.remove())
                    pokemon_encounters.forEach((elem) => create('button', 'pokemon-item', elem.pokemon.name, pokemonList, '', elem.pokemon.url, elem.pokemon.name))
                })
})
}
//Список регионов
const apiRequestRegion = ()=>{
let customLink = `?limit=${paginationRegions.limit}&offset=${paginationRegions.offset * paginationRegions.page}`
fetch(`${APIlocations}${customLink}`)
    .then(res => res.json())
        .then(res =>{
            let {results} = res
            let locationsList = document.querySelector('.region-list-wrap')
            results.forEach(elem => createRegions('button', 'search-item', elem.name, locationsList, '', elem.url))
})
}
//Переключение регионов пагинацией
const paginationRegions = {
    limit: 10,
    offset: 10,
    page: 0
}

const regionWrap = document.querySelector('.region-wrap')
create('div', 'pagination-region-wrap', '', regionWrap)
const regionPaginationWrap = document.querySelector('.pagination-region-wrap')
createP('button', 'prev btn-pag-reg', 'prev', regionPaginationWrap)
createP('p', 'page-region', `${paginationPokemon.page + 1}`, regionPaginationWrap)
createP('button', 'next btn-pag-reg', 'next', regionPaginationWrap)

const locationListWrap = document.querySelector('.region-list-wrap')

const btnPagReg = document.querySelectorAll('.btn-pag-reg')
btnPagReg.forEach(elem =>{
    elem.addEventListener('click', function(){
        let pageRegion = document.querySelector('.page-region')
    if (elem.classList.contains('next')){
        paginationRegions.page = paginationRegions.page + 1
        pageRegion.textContent = paginationRegions.page +1
    }
    if (elem.classList.contains('prev')){
        if(paginationRegions.page > 0){
            paginationRegions.page = paginationRegions.page - 1
            pageRegion.textContent = paginationRegions.page +1
            }else{
                paginationRegions.page = 0
            }
    }
    locationListWrap.innerHTML = ''
    apiRequestRegion()
    })
})
apiRequestRegion()  

//-----------------Получение типов------------------//
//Кнопка типа
const createType= (tag, clas, text, element2, api)=>{
    let element = document.createElement(tag)
    element.className = clas
    element.textContent = text
    element2.append(element)

    element.addEventListener('click', ()=>{
        fetch(api)
            .then(res => res.json())
                .then(res =>{
                    let {pokemon} = res
                    let pokemonItems = document.querySelectorAll('.pokemon-item')

                    if (pokemonItems)pokemonItems.forEach(elem => elem.remove())
                    pokemon.forEach((elem) => create('button', 'pokemon-item', elem.pokemon.name, pokemonList, '', elem.pokemon.url, elem.pokemon.name))
                })
})
}
//Список типов
fetch(APItype)
    .then(res => res.json())
        .then(res => {
            let {results} = res
            console.log(res)
            let typeList = document.querySelector('.type-list-wrap')
            results.forEach(elem => createType('button', 'search-item', elem.name, typeList, elem.url))
})