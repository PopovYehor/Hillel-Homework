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
const evolution = (api, id, pokemonName, text)=>{

fetch(api)
    .then(res => res.json())
        .then(res => {
            let {pokemon_species} = res
            for (let i = 0; i<pokemon_species.length; i++){
                //Если  для покомена есть
                if (`${API}pokemon-species/${id}/` == pokemon_species[i].url){
                    create('button', 'pokemon-evo-btn', `${text} for ${pokemonName}`,  selectPokemon, '', `${APIpokemon}${id}`)
                    break
                }
            }
        })
}

//Функция рендера информации о покемоне

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

                    pokemonTitle.innerHTML = ''
                    create('h2', 'pokemon-title', `Your Pokemon is ${pokemonName}`, pokemonTitle)
                    create('img', 'pokemon-img', null, pokemonTitle, front_default)
                    //Создание кнопки эволюции
                    const evoBtn = document.querySelector('.pokemon-evo-btn')
                    let trigerCount = 10
                    for (let i = 1; i<trigerCount; i++){
                        //Если эволюция есть
                    if (evolution(`${APIpokemonEvoTrigger}${i}`, plusID, pokemonName, 'Evolution')){
                        evolution(`${APIpokemonEvoTrigger}${i}`, plusID, pokemonName, 'Evolution')
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

//-------------------------------------Список покемонов--------------------------//

const pokemonList = document.querySelector('.pokemon-list')
let pokemonListContainer = document.querySelector('.pokemon-list-wrap')

const paginationPokemon = {
    limit: 20,
    offset: 20,
    page: 0
}

//Вывод общего списка покемонов
const apiRequest = ()=>{

let customLink = `?limit=${paginationPokemon.limit}&offset=${paginationPokemon.offset * paginationPokemon.page}`

fetch(`${API}pokemon${customLink}`)
.then(res => res.json())
.then(res =>{
    let {results} = res
    let pokemonItemData = results

    pokemonItemData.forEach( (elem) =>{create('button', 'pokemon-item pokemon-item-list', elem.name, pokemonList, '', elem.url, elem.name)})
})
}
//Функция пагинации
const pagination = function(elem, count, pageses, equal , plus){
    
    if (count == 1){ obj = paginationPokemon}
    if (count == 2){ obj = paginationRegions}
    if (count == 3){ obj = pokemonTypeArr}

    if (elem.classList.contains('next')){
        obj.page = obj.page + 1
        pageses.textContent = obj.page + plus
        obj.offset = obj.offset + obj.limit
    }
    if (elem.classList.contains('prev')){
        if(obj.page > equal){
            obj.page = obj.page - 1
            pageses.textContent = obj.page + plus
            obj.offset = obj.offset - obj.limit
            }else{
                obj.page = equal
            }
    }
}
//Прокрутка покемонов пагинацией
const createPokemonPagination = ()=>{
let paginationWrap1 = document.querySelector('.pagination-wrap')
if(!paginationWrap1){
    create('div', 'pagination-wrap', '', pokemonListContainer)
    let paginationWrap = document.querySelector('.pagination-wrap')
    createP('button', 'prev btn-pag', 'prev', paginationWrap)
    createP('p', 'page', `${paginationPokemon.page +1}`, paginationWrap)
    createP('button', 'next btn-pag', "next", paginationWrap)
}
const btnPag = document.querySelectorAll('.btn-pag')
btnPag.forEach(elem =>{
        elem.addEventListener('click', function(){
            let pageses = document.querySelector('.page')
            pagination(elem, 1, pageses, 0, 1)
            pokemonList.innerHTML = ''
            apiRequest()
    })
})
}
apiRequest()
createPokemonPagination()

//Фукция возврата к общему списку покемонов

const createAll = (clas, text, element2)=>{
    let element = document.createElement('button')
    element.className = clas
    element.textContent = text
    element2.append(element)
    element.addEventListener('click', function(){
        paginationPokemon.page = 0
        let pagination = document.querySelector('.pagination-wrap')
        let paginationType = document.querySelector('.pagination-wrap-type')
        if (paginationType) deleteElement(paginationType);
        if (!pagination)createPokemonPagination();
        pokemonList.innerHTML = ''
        apiRequest()
})
}

//---------------------------------------------Получение регионов-------------------------------------//
//Кнопка региона
const createRegions = (tag, clas, text, element2, api)=>{
    let element = document.createElement(tag)
    element.className = clas
    element.textContent = text
    element2.append(element)

    element.addEventListener('click', ()=>{
        fetch(api)
            .then(res => res.json())
                .then(res =>{
                    let {pokemon_encounters} = res
                    pokemonList.innerHTML = ''
                    let paginationWrap = document.querySelector('.pagination-wrap')
                    if (paginationWrap) deleteElement(paginationWrap)
                    let paginationType = document.querySelector('.pagination-wrap-type')
                    if(paginationType) deleteElement(paginationType)
                    pokemon_encounters.forEach((elem) => create('button', 'pokemon-item pokemon-reg', elem.pokemon.name, pokemonList, '', elem.pokemon.url, elem.pokemon.name))
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
            createAll('search-item', 'all pokemons', locationsList)
            results.forEach(elem => createRegions('button', 'search-item', elem.name, locationsList, elem.url))
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
        pagination(elem, 2, pageRegion, 0, 1)
        locationListWrap.innerHTML = ''
        apiRequestRegion()
    })
})
apiRequestRegion()  

//-----------------------------------------Получение типов------------------------------------------//
//масив выбраного типа покемонов
const pokemonTypeArr = {
    item: [],
    offset: 20,
    limit: 20,
    page: 1
}

//Прокрутка типа
const createPaginationType = ()=>{

    create('div', 'pagination-wrap-type', '', pokemonListContainer)
    let paginationWrap = document.querySelector('.pagination-wrap-type')
    createP('button', 'prev btn-pag-type', 'prev', paginationWrap)
    createP('p', 'page page-type', `${pokemonTypeArr.page}`, paginationWrap)
    createP('button', 'next btn-pag-type', "next", paginationWrap)

const btnPagType = document.querySelectorAll('.btn-pag-type')
    btnPagType.forEach(elem => elem.addEventListener('click', function(){
        let pageType = document.querySelector('.page-type')
        pagination(elem, 3, pageType, 1, 0 )
        pokemonList.innerHTML = ''
        pokemonTypeArr.item.slice((pokemonTypeArr.offset-pokemonTypeArr.limit), pokemonTypeArr.offset).forEach(elem =>create('button', 'pokemon-item pokemon-type', elem.pokemon.name, pokemonList, '', elem.pokemon.url, elem.pokemon.name) )
    }))
}

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
                    pokemonTypeArr.item = pokemon
                    pokemonTypeArr.page = 1
                    pokemonTypeArr.offset = 20
                    pokemonList.innerHTML = ''
                    let paginationWrap = document.querySelector('.pagination-wrap')
                    if (paginationWrap) deleteElement(paginationWrap)
                    pokemon.slice((pokemonTypeArr.offset-pokemonTypeArr.limit), pokemonTypeArr.offset).forEach(elem =>create('button', 'pokemon-item pokemon-type', elem.pokemon.name, pokemonList, '', elem.pokemon.url, elem.pokemon.name) )
                    let paginationType = document.querySelector('.pagination-wrap-type')
                    if(paginationType) deleteElement(paginationType)
                    createPaginationType()
                })
})
}
//Список типов

fetch(APItype)
        .then(res => res.json())
            .then(res => {
                let {results} = res
                let typeList = document.querySelector('.type-list-wrap')
                createAll('search-item', 'all pokemons', typeList)
                results.forEach(elem => createType('button', 'search-item', elem.name, typeList, elem.url))
    })

