import './style.scss'
import { initTable } from './initTable'
import {createTableElement} from "./tableElement"

initTable()

const token = 'suyvwagwt8i3xonkps4yjp9s6rfxmvx4afecjakx'
const url = 'https://api.json-generator.com/templates/RwH9OiVQglAB/data'


fetch(`${url}?access_token=${token}`).then(res=>res.json()).then(json =>{
    let {user} = json
    user.forEach((element, i) => createTableElement(element.name, element.surname, element.date,element.rating, i))
})