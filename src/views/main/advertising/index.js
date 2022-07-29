import "./style.scss"

const advertising = ()=>{
    let elem = `
    <button class="slide slide-left"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L1 7L7 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>

        <div class="title-advertising">
            <div>
            <span class="title-advertising-description">Кресла Samuraiна выгодных условиях по всей стране <img class="flag" src="https://www.freepnglogos.com/uploads/ukraine-flag-png/ukraine-flag-waving-blue-and-yellow-image-11.png" alt=""></span>
            </div>
            <div class ="title-advertising-description-add">
            <span >Здесь вам не придется покупать товар в слепую — проведите тест-драйв перед покупкой</span>
            </div>
            <div>
            <button class="title-entry">Запись на тест-драйв</button>
            </div>
        </div>

        <div >
            <img class="tite-image" src="https://s3-alpha-sig.figma.com/img/ec38/a9a8/6d4562219984035e9c686740c1093289?Expires=1659916800&Signature=fkfLY5hlkcYAB1GXA7NLNr9p5QOD44ocoyvlZJlSFgPZCtKgwqYuHyz9Evj09AtLujhJYiaonTzkXU7pvS~hsMSUGgwXeoiSJmdYYuodDrvcis-MFuFpGEVcwUxPnOu8sPq82BRRup8AET7c4O20ON1CYwrUj4iwL~yjsuZjsskJR4uuOnlW9Mspd9xDn5wkbE1HzFmEslvvi7f~ASpRbTk-0VZcAHvx8ekY~ZMA6bzjhvlNqmKLjfBbneF7YNi2KjZOCo9vLQFnMY-0mv19apAE2jk77bxPH~21p7YEJdH8WYVDv7IyY3BRMrO1ZZ1hWUWXaDCyZ4yHMpHOlpb6gQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
        </div>
        <div >
            <img class="tite-image-2" src="https://s3-alpha-sig.figma.com/img/ee97/f700/e1c3949cc94a5b4451c89a08da480298?Expires=1659916800&Signature=Lb7dfudlmV7j4LcouZaJ1DmkdE6E4XmpafSTnT4n3RhYDqkV3j7aMEk39UE-wnxA3DDNi4NRA-n10G2BwCMw4TFq8mGEwue0i517GjuqE3tzPYjK8QcxFKG4-TSuZ9wiSTCoEjrhMyyfuJJ0j99z9k5K9~PBP21eMqurzzDmZQjqBBdg4fD3Z03NTlGWGM4Wirua-XOTs97JEnnkzav0sWiUyN0vQe1lSzZwejU1oDIvEhD~R0~6wAaYUB5xUkW550R1GoBV6sFZ6US0SMZiITvvB7EpCnwbE-mYk7PnPUy9fnOv3YZU4eHPBOumPXbcXb~IC9tLvY9eoEDjCPVcvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="">
        </div>

        <button class="slide slide-right"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                        
            </button>
    `
    const wrap = document.querySelector('.advertising')
    wrap.innerHTML = elem
}

export {advertising}