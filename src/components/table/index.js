import './style.scss'
import { initTable } from './initTable'
import {createTableElement} from "./tableElement"
import moment from 'moment'


const token = 'suyvwagwt8i3xonkps4yjp9s6rfxmvx4afecjakx'
const url = 'https://api.json-generator.com/templates/RwH9OiVQglAB/data'
const API = `${url}?access_token=${token}`
const renderTable = ()=>{
fetch(API).then(res=>res.json()).then(json =>{
    let {user} = json
    let ratingUser = user.sort((a, b)=> b.rating >a.rating ? 1 : -1)
    ratingUser.forEach(elem => elem.date =  moment(elem.date, 'DD-MM-YYYY').format('DD/MM/YY'))
    initTable()
    ratingUser.forEach((element, i) => createTableElement(element.name, element.surname, element.date,element.rating, i))
})
}
export {url, token, renderTable} 