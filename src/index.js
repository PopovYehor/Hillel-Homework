import "./style/all.scss"
import { header } from "./components/header";
import { footer } from "./components/footer"
import {onLocation} from "../src/helper/route.js";
import {createElem} from "./helper/createElement"

const root = document.getElementById('root')
header()
createElem('div', null, null, root, 'id', 'main')
createElem('footer', null, null, root)
footer()
onLocation()
