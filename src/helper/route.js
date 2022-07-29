import Main from "../views/main"
import prduct from "../components/product"

const onHandleRoute = (e) => {
    e = e || e.window
    e.preventDefault()
    window.history.pushState({}, '', e.target.href)
    onLocation()
}

const routes = {
    '/':Main,
    '/about-product': prduct,
}

const onLocation = () => {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    const main = document.getElementById('main')
    main.innerHTML = '';
    route()
}

window.onpopstate = onLocation
window.route = onHandleRoute

export { onHandleRoute, onLocation }